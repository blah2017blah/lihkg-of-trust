// ==UserScript==
// @name         lihkg-of-trust
// @version      0.0.2
// @description  LIHKG of Trust. LIHKG User Reputation.
// @license      MIT
// @author       blah2017blah
// @include      http*://lihkg.com/*
// @namespace    https://github.com/blah2017blah/
// @homepageURL  https://github.com/blah2017blah/lihkg-of-trust
// @supportURL   https://github.com/blah2017blah/lihkg-of-trust/issues
// @grant        none
// ==/UserScript==

(function() {
    'use strict'

    /**
     * 格式：
     * const userIdMap = {
     *     '用戶名1(不含emoji)': 11111,    // 會員編號 11111
     * .   '用戶名1别名(不含emoji)': 11111, // 會員編號 11111
     *
     *     '用戶名2(不含emoji)': 22222,    // 會員編號 22222
     * }
     */
    const userIdMap = {
        // '用戶名': 999999,
    }

    /**
     * 格式：
     * const userList = {
     *     11111: {             // 會員編號 11111
     *         fiveCents: true, // 三毛/五毛
     *         troll: true,     // 假膠
     *     },
     *     22222: {             // 會員編號 22222
     *         trusted: true,   // 優質
     *     },
     * }
     */
    const userList = {
        // 999999: {
        //     fiveCents: true,
        //     troll: true,
        //     trusted: true,
        // },
    }

    const fiveCentsIcon = '<i class="em em-bug" />'
    const trollsIcon = '<i class="em em-clown_face"/>'
    const trustedIcon = '<i class="em em-reminder_ribbon"/>'

    const getElementByXpath = (path, contextNode = document) => document.evaluate(path, contextNode, null, XPathResult.ANY_TYPE, null)

    const initIcon = () => {
        const head = document.getElementsByTagName('head')[0]
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.type = 'text/css'
        link.href = 'https://afeld.github.io/emoji-css/emoji.css'
        link.media = 'all'
        head.appendChild(link)
    }

    const attachObserver = (element, observeHandler) => {
        const config = { attributes: false, childList: true, subtree: false }

        const panelObserver = new MutationObserver(observeHandler)
        panelObserver.observe(element, config)
    }

    const attachIcon = (icon, element) => {
        element.innerHTML = `${element.innerHTML}${icon}`
    }

    const updatePanel = nameSpan => {
        const name = nameSpan.innerText.trim()
        const userId = userIdMap[name]

        if (!userId) {
            return
        }

        const user = userList[userId]

        if (user) {
            if (user.fiveCents) {
                attachIcon(fiveCentsIcon, nameSpan)
            }
            if (user.troll) {
                attachIcon(trollsIcon, nameSpan)
            }
            if (user.trusted) {
                attachIcon(trustedIcon, nameSpan)
            }
        }
    }

    const start = () => {
        const addIconsObserveHandler = getNameElements => mutationList => {
            mutationList.forEach(mutation => {
                if (mutation.type === 'childList' && mutation.addedNodes.length) {
                    const nameElements = getNameElements(mutation.addedNodes[0])
                    nameElements.forEach(nameElement => updatePanel(nameElement))
                }
            })
        }

        const checkLeftPanelExist = setInterval(() => {
            if (getElementByXpath('//div[@id="leftPanel"]/div[2]').iterateNext()) {
                attachObserver(
                    getElementByXpath('//div[@id="leftPanel"]/div[2]').iterateNext(),
                    addIconsObserveHandler(addedNode => {
                        const nameSpan = addedNode.querySelector('small > span:first-child')
                        if (nameSpan) {
                            return [nameSpan]
                        }
                        return []
                    })
                )
                clearInterval(checkLeftPanelExist)
            }
        }, 100)

        let checkRightPanelExist = 0

        const checkRightPanel = () => {
            const resetRightPanelCheckObserveHandler = mutationList => {
                mutationList.forEach(mutation => {
                    if (mutation.type === 'childList' && mutation.removedNodes.length && !checkRightPanelExist) {
                        checkRightPanel()
                    }
                })
            }

            checkRightPanelExist = setInterval(() => {
                if (getElementByXpath('//div[@id="rightPanel"]/div[1]').iterateNext()) {
                    attachObserver(
                        getElementByXpath('//div[@id="rightPanel"]/div[1]').iterateNext(),
                        addIconsObserveHandler(addedNode => addedNode.querySelectorAll('a[href^="/profile"]'))
                    )
                    clearInterval(checkRightPanelExist)
                    checkRightPanelExist = 0

                    attachObserver(getElementByXpath('//div[@id="rightPanel"]/parent::div').iterateNext(), resetRightPanelCheckObserveHandler)
                }
            }, 100)
        }

        checkRightPanel()
    }

    initIcon()
    start()
})()
