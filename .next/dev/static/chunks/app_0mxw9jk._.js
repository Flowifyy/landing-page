(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const navLinks = [];
const Header = ({ onOpenAudit })=>{
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize and track theme
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const savedTheme = localStorage.getItem('theme');
            const initialTheme = savedTheme || 'light';
            setTheme(initialTheme);
            if (initialTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }["Header.useEffect"], []);
    const toggleTheme = ()=>{
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        if (nextTheme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };
    // Scroll height shrink trigger
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 40);
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: isScrolled ? '12px' : '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 32px)',
            maxWidth: '1200px',
            zIndex: 1000,
            transition: 'top 0.3s cubic-bezier(0.16, 1, 0.3, 1), width 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    width: '100%',
                    border: '2px solid var(--color-text-primary)',
                    backgroundColor: 'color-mix(in srgb, var(--color-surface) 85%, transparent)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: '6px 6px 0px var(--color-text-primary)',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: isScrolled ? '64px' : '76px',
                            paddingInline: 'var(--space-4)',
                            transition: 'height 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#hero",
                                onClick: ()=>setMobileMenuOpen(false),
                                style: {
                                    display: 'flex',
                                    alignItems: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/in-line-flowify.svg",
                                    alt: "Flowify",
                                    style: {
                                        height: isScrolled ? '24px' : '30px',
                                        width: 'auto',
                                        display: 'block',
                                        transition: 'height 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.jsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "desktop-links",
                                style: {
                                    display: 'flex',
                                    gap: 'var(--space-2)',
                                    alignItems: 'center'
                                },
                                children: navLinks.map((link)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.anchor,
                                        className: "nav-anchor-brutal",
                                        style: {
                                            fontFamily: 'var(--font-heading-mono)',
                                            fontSize: '0.8rem',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            color: 'var(--color-text-secondary)',
                                            transition: 'all 0.15s ease',
                                            padding: '8px 12px',
                                            border: '1px solid transparent'
                                        },
                                        children: link.name
                                    }, link.name, false, {
                                        fileName: "[project]/app/components/Header.jsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header.jsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-3)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleTheme,
                                        "aria-label": "Toggle visual theme",
                                        className: "theme-switch-brutal",
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '38px',
                                            height: '38px',
                                            border: '1px solid var(--color-text-primary)',
                                            backgroundColor: 'var(--color-surface)',
                                            boxShadow: '2px 2px 0px var(--color-text-primary)',
                                            transition: 'all 0.15s ease',
                                            cursor: 'pointer'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.transform = 'translate(-1px, -1px)';
                                            e.currentTarget.style.boxShadow = '3px 3px 0px var(--color-text-primary)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.transform = 'none';
                                            e.currentTarget.style.boxShadow = '2px 2px 0px var(--color-text-primary)';
                                        },
                                        children: theme === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                            size: 16,
                                            strokeWidth: 2.5,
                                            style: {
                                                color: 'var(--color-text-primary)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header.jsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                            size: 16,
                                            strokeWidth: 2.5,
                                            style: {
                                                color: 'var(--color-text-primary)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header.jsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.jsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onOpenAudit,
                                        className: "btn-brutal-nav desktop-only",
                                        style: {
                                            fontFamily: 'var(--font-heading-mono)',
                                            fontSize: '0.8rem',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            backgroundColor: 'var(--color-accent)',
                                            color: '#070709',
                                            border: '2px solid var(--color-text-primary)',
                                            boxShadow: '4px 4px 0px var(--color-text-primary)',
                                            padding: '8px 16px',
                                            cursor: 'pointer',
                                            transition: 'all 0.15s ease'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.transform = 'translate(-2px, -2px)';
                                            e.currentTarget.style.boxShadow = '6px 6px 0px var(--color-text-primary)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.transform = 'none';
                                            e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-text-primary)';
                                        },
                                        children: "Free Operations Audit"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.jsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "mobile-hamburger-brutal",
                                        onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                        "aria-label": "Toggle navigation menu",
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '38px',
                                            height: '38px',
                                            border: '1px solid var(--color-text-primary)',
                                            color: 'var(--color-text-primary)',
                                            boxShadow: '2px 2px 0px var(--color-text-primary)',
                                            backgroundColor: 'var(--color-surface)',
                                            cursor: 'pointer',
                                            transition: 'all 0.15s ease'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.transform = 'translate(-1px, -1px)';
                                            e.currentTarget.style.boxShadow = '3px 3px 0px var(--color-text-primary)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.transform = 'none';
                                            e.currentTarget.style.boxShadow = '2px 2px 0px var(--color-text-primary)';
                                        },
                                        children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header.jsx",
                                            lineNumber: 217,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header.jsx",
                                            lineNumber: 217,
                                            columnNumber: 51
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.jsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Header.jsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Header.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-slide-drawer-brutal",
                        style: {
                            borderTop: '2px solid var(--color-text-primary)',
                            padding: 'var(--space-4)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-3)',
                            backgroundColor: 'var(--color-surface)'
                        },
                        children: [
                            navLinks.map((link)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.anchor,
                                    onClick: ()=>setMobileMenuOpen(false),
                                    style: {
                                        fontFamily: 'var(--font-heading-mono)',
                                        fontSize: '0.9rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        color: 'var(--color-text-primary)',
                                        border: '1px solid var(--color-border)',
                                        padding: '12px var(--space-3)',
                                        backgroundColor: 'var(--color-bg)',
                                        transition: 'all 0.15s ease'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.borderColor = 'var(--color-text-primary)';
                                        e.currentTarget.style.backgroundColor = 'var(--color-surface-subtle)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.borderColor = 'var(--color-border)';
                                        e.currentTarget.style.backgroundColor = 'var(--color-bg)';
                                    },
                                    children: link.name
                                }, link.name, false, {
                                    fileName: "[project]/app/components/Header.jsx",
                                    lineNumber: 237,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setMobileMenuOpen(false);
                                    onOpenAudit();
                                },
                                style: {
                                    width: '100%',
                                    marginTop: 'var(--space-2)',
                                    fontFamily: 'var(--font-heading-mono)',
                                    fontSize: '0.9rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    backgroundColor: 'var(--color-accent)',
                                    color: '#070709',
                                    border: '2px solid var(--color-text-primary)',
                                    boxShadow: '4px 4px 0px var(--color-text-primary)',
                                    padding: '12px 16px',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s ease'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.transform = 'translate(-2px, -2px)';
                                    e.currentTarget.style.boxShadow = '6px 6px 0px var(--color-text-primary)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.transform = 'none';
                                    e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-text-primary)';
                                },
                                children: "Free Operations Audit"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header.jsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Header.jsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Header.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .desktop-only { display: none; }
        @media (min-width: 768px) {
          .desktop-only { display: inline-flex; }
          .mobile-hamburger-brutal { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-links { display: none !important; }
        }
        
        /* Brutalist link hover effects */
        .nav-anchor-brutal:hover {
          color: var(--color-text-primary) !important;
          background-color: var(--color-surface-subtle);
          border-color: var(--color-text-primary);
          box-shadow: 2px 2px 0px var(--color-text-primary);
          transform: translate(-1px, -1px);
        }
        
        .mobile-slide-drawer-brutal {
          animation: slideDownBrutal 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: top;
        }
        
        @keyframes slideDownBrutal {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blink {
          50% { opacity: 0; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/Header.jsx",
                lineNumber: 301,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Header.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "1UOyynsIbioJ3e721tC4O879mv8=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Hero = ({ onOpenAudit: _onOpenAudit })=>{
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const togglePlay = (e)=>{
        e.stopPropagation();
        const video = videoRef.current;
        if (!video) return;
        if (isPlaying) {
            video.pause();
            setIsPlaying(false);
        } else {
            if (video.ended) {
                video.currentTime = 0;
            }
            video.play().then(()=>setIsPlaying(true)).catch((err)=>console.log("Playback failed:", err));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        style: {
            paddingTop: 'calc(var(--space-8) * 1.8)',
            paddingBottom: 'var(--space-8)',
            borderBottom: '1px solid var(--color-border)',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fade-in-staged",
                            style: {
                                animationDelay: '0.1s'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontSize: 'var(--font-size-hero)',
                                        lineHeight: 1.1,
                                        letterSpacing: '-0.04em',
                                        marginBottom: 'var(--space-3)',
                                        color: 'var(--color-text-primary)'
                                    },
                                    children: [
                                        "We automate your ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "editorial-serif",
                                            style: {
                                                color: 'var(--color-accent)'
                                            },
                                            children: "business workflows"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Hero.jsx",
                                            lineNumber: 52,
                                            columnNumber: 32
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " so you can focus on ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "editorial-serif",
                                            children: "growth"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Hero.jsx",
                                            lineNumber: 52,
                                            columnNumber: 153
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Hero.jsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '64px',
                                        height: '2px',
                                        backgroundColor: 'var(--color-accent)',
                                        marginBottom: 'var(--space-3)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Hero.jsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Hero.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fade-in-staged",
                            style: {
                                animationDelay: '0.3s'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-premium",
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: 0,
                                    overflow: 'hidden',
                                    backgroundColor: 'var(--color-surface)',
                                    borderColor: 'var(--color-text-primary)',
                                    borderWidth: '2px',
                                    boxShadow: '8px 8px 0px var(--color-text-primary)',
                                    borderRadius: 'var(--radius-sm)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: 'var(--space-2) var(--space-3)',
                                            backgroundColor: 'var(--color-surface-subtle)',
                                            borderBottom: '2px solid var(--color-text-primary)',
                                            fontFamily: 'var(--font-heading-mono)',
                                            fontSize: 'var(--font-size-xs)',
                                            fontWeight: 700,
                                            color: 'var(--color-text-primary)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        gap: '4px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: '8px',
                                                                height: '8px',
                                                                borderRadius: '50%',
                                                                backgroundColor: 'var(--color-danger)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Hero.jsx",
                                                            lineNumber: 91,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: '8px',
                                                                height: '8px',
                                                                borderRadius: '50%',
                                                                backgroundColor: 'var(--color-warning)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Hero.jsx",
                                                            lineNumber: 92,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: '8px',
                                                                height: '8px',
                                                                borderRadius: '50%',
                                                                backgroundColor: 'var(--color-accent)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Hero.jsx",
                                                            lineNumber: 93,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Hero.jsx",
                                                    lineNumber: 90,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "hero-wala-video.mp4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Hero.jsx",
                                                    lineNumber: 95,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Hero.jsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Hero.jsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            width: '100%',
                                            aspectRatio: '16 / 9',
                                            backgroundColor: '#000000',
                                            overflow: 'hidden',
                                            cursor: 'pointer'
                                        },
                                        onClick: togglePlay,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                ref: videoRef,
                                                src: "/video-asset/hero-wala-video.mp4",
                                                playsInline: true,
                                                muted: false,
                                                onEnded: ()=>setIsPlaying(false),
                                                style: {
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Hero.jsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    inset: 0,
                                                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent 60%)',
                                                    pointerEvents: 'none',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',
                                                    padding: 'var(--space-3)',
                                                    zIndex: 2
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'flex-end',
                                                            pointerEvents: 'auto'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Hero.jsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            pointerEvents: 'auto',
                                                            width: '100%'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: togglePlay,
                                                            style: {
                                                                backgroundColor: 'rgba(7, 7, 9, 0.75)',
                                                                border: '1.5px solid var(--color-text-primary)',
                                                                borderRadius: '0px',
                                                                width: '36px',
                                                                height: '36px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                color: '#FFFFFF',
                                                                cursor: 'pointer',
                                                                transition: 'transform var(--transition-fast)'
                                                            },
                                                            children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                                size: 16,
                                                                fill: "#FFFFFF"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Hero.jsx",
                                                                lineNumber: 168,
                                                                columnNumber: 36
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                size: 16,
                                                                fill: "#FFFFFF",
                                                                style: {
                                                                    marginLeft: '2px'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Hero.jsx",
                                                                lineNumber: 168,
                                                                columnNumber: 73
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Hero.jsx",
                                                            lineNumber: 152,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Hero.jsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Hero.jsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Hero.jsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Hero.jsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Hero.jsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Hero.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Hero.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes recordingBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/Hero.jsx",
                lineNumber: 177,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Hero.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Hero, "Rw/PlTgeCTiejpXl1/RzauYRzQI=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/useReveal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReveal",
    ()=>useReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useReveal(threshold = 0.15) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "useReveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(el); // Once revealed, stop observing
                    }
                }
            }["useReveal.useEffect"], {
                threshold
            });
            observer.observe(el);
            return ({
                "useReveal.useEffect": ()=>observer.disconnect()
            })["useReveal.useEffect"];
        }
    }["useReveal.useEffect"], [
        threshold
    ]);
    return [
        ref,
        isVisible
    ];
}
_s(useReveal, "Wk8baY7uc+CWSrD2kMBp+I8qtIg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/WorkflowSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkflowSection",
    ()=>WorkflowSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize.js [app-client] (ecmascript) <export default as Maximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useReveal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const WorkflowSection = ()=>{
    _s();
    const [revealRef, isVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])(0.1);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const togglePlay = (e)=>{
        if (e) e.stopPropagation();
        const video = videoRef.current;
        if (!video) return;
        if (isPlaying) {
            video.pause();
            setIsPlaying(false);
        } else {
            if (video.ended) {
                video.currentTime = 0;
            }
            video.play().then(()=>setIsPlaying(true)).catch((err)=>console.log("Playback failed:", err));
        }
    };
    const toggleMute = (e)=>{
        if (e) e.stopPropagation();
        const video = videoRef.current;
        if (!video) return;
        video.muted = !isMuted;
        setIsMuted(!isMuted);
    };
    const handleTimeUpdate = ()=>{
        const video = videoRef.current;
        if (!video) return;
        setProgress(video.currentTime / video.duration * 100);
    };
    const handleLoadedMetadata = ()=>{
        const video = videoRef.current;
        if (!video) return;
        setDuration(video.duration);
    };
    const handleProgressClick = (e)=>{
        e.stopPropagation();
        const video = videoRef.current;
        if (!video) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const newTime = clickX / width * video.duration;
        video.currentTime = newTime;
        setProgress(newTime / video.duration * 100);
    };
    const handleFullscreen = (e)=>{
        e.stopPropagation();
        const video = videoRef.current;
        if (!video) return;
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    };
    // Format time (seconds to MM:SS)
    const formatTime = (secs)=>{
        if (isNaN(secs)) return '0:00';
        const m = Math.floor(secs / 60);
        const s = Math.floor(secs % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "workflow-section",
        ref: revealRef,
        className: `reveal ${isVisible ? 'visible' : ''}`,
        style: {
            paddingTop: 'calc(var(--space-8) * 1.5)',
            paddingBottom: 'calc(var(--space-8) * 1.5)',
            borderBottom: '1px solid var(--color-border)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '100%',
                                margin: '0 auto'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-premium",
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: 0,
                                    overflow: 'hidden',
                                    backgroundColor: 'var(--color-surface)',
                                    borderColor: 'var(--color-text-primary)',
                                    borderWidth: '2px',
                                    boxShadow: '8px 8px 0px var(--color-text-primary)',
                                    borderRadius: 'var(--radius-sm)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: 'var(--space-2) var(--space-3)',
                                            backgroundColor: 'var(--color-surface-subtle)',
                                            borderBottom: '2px solid var(--color-text-primary)',
                                            fontFamily: 'var(--font-heading-mono)',
                                            fontSize: 'var(--font-size-xs)',
                                            fontWeight: 700,
                                            color: 'var(--color-text-primary)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        gap: '4px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: '8px',
                                                                height: '8px',
                                                                borderRadius: '50%',
                                                                backgroundColor: 'var(--color-danger)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/WorkflowSection.jsx",
                                                            lineNumber: 139,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: '8px',
                                                                height: '8px',
                                                                borderRadius: '50%',
                                                                backgroundColor: 'var(--color-warning)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/WorkflowSection.jsx",
                                                            lineNumber: 140,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: '8px',
                                                                height: '8px',
                                                                borderRadius: '50%',
                                                                backgroundColor: 'var(--color-accent)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/WorkflowSection.jsx",
                                                            lineNumber: 141,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/WorkflowSection.jsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "workflow-section-video.mp4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/WorkflowSection.jsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/WorkflowSection.jsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/WorkflowSection.jsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "video-player-container",
                                        style: {
                                            position: 'relative',
                                            width: '100%',
                                            aspectRatio: '16 / 9',
                                            backgroundColor: '#000000',
                                            overflow: 'hidden',
                                            cursor: 'pointer'
                                        },
                                        onClick: togglePlay,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                ref: videoRef,
                                                src: "/video-asset/workflow-section-video.mp4",
                                                playsInline: true,
                                                onTimeUpdate: handleTimeUpdate,
                                                onLoadedMetadata: handleLoadedMetadata,
                                                onEnded: ()=>setIsPlaying(false),
                                                style: {
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/WorkflowSection.jsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    inset: 0,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: 'rgba(0, 0, 0, 0.35)',
                                                    zIndex: 2,
                                                    transition: 'background-color 0.2s ease'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '72px',
                                                        height: '72px',
                                                        borderRadius: '50%',
                                                        backgroundColor: 'var(--color-accent)',
                                                        border: '2px solid var(--color-text-primary)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                                                        transform: 'scale(1)',
                                                        transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.transform = 'scale(1.1)',
                                                    onMouseLeave: (e)=>e.currentTarget.style.transform = 'scale(1)',
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        size: 28,
                                                        fill: "#070709",
                                                        stroke: "#070709",
                                                        style: {
                                                            marginLeft: '4px'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/WorkflowSection.jsx",
                                                        lineNumber: 205,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/WorkflowSection.jsx",
                                                    lineNumber: 188,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/WorkflowSection.jsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "video-controls-bar",
                                                style: {
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: 0,
                                                    right: 0,
                                                    background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))',
                                                    padding: 'var(--space-3)',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '8px',
                                                    zIndex: 3,
                                                    opacity: isPlaying ? 0 : 1,
                                                    transition: 'opacity 0.3s ease'
                                                },
                                                onClick: (e)=>e.stopPropagation(),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            height: '6px',
                                                            width: '100%',
                                                            backgroundColor: 'rgba(255,255,255,0.2)',
                                                            cursor: 'pointer',
                                                            position: 'relative',
                                                            borderRadius: '3px'
                                                        },
                                                        onClick: handleProgressClick,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                height: '100%',
                                                                width: `${progress}%`,
                                                                backgroundColor: 'var(--color-accent)',
                                                                borderRadius: '3px',
                                                                transition: 'width 0.1s linear'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/WorkflowSection.jsx",
                                                            lineNumber: 241,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/WorkflowSection.jsx",
                                                        lineNumber: 230,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '16px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: togglePlay,
                                                                        style: {
                                                                            color: '#FFFFFF',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            cursor: 'pointer'
                                                                        },
                                                                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                                            size: 18,
                                                                            fill: "#FFFFFF"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/WorkflowSection.jsx",
                                                                            lineNumber: 265,
                                                                            columnNumber: 38
                                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                            size: 18,
                                                                            fill: "#FFFFFF"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/WorkflowSection.jsx",
                                                                            lineNumber: 265,
                                                                            columnNumber: 75
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/WorkflowSection.jsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: toggleMute,
                                                                        style: {
                                                                            color: '#FFFFFF',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            cursor: 'pointer'
                                                                        },
                                                                        children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/WorkflowSection.jsx",
                                                                            lineNumber: 278,
                                                                            columnNumber: 36
                                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/WorkflowSection.jsx",
                                                                            lineNumber: 278,
                                                                            columnNumber: 60
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/WorkflowSection.jsx",
                                                                        lineNumber: 268,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: '#E4E4E7',
                                                                            fontSize: 'var(--font-size-xs)',
                                                                            fontFamily: 'var(--font-heading-mono)'
                                                                        },
                                                                        children: [
                                                                            formatTime(videoRef.current ? videoRef.current.currentTime : 0),
                                                                            " / ",
                                                                            formatTime(duration)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/WorkflowSection.jsx",
                                                                        lineNumber: 281,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/WorkflowSection.jsx",
                                                                lineNumber: 254,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleFullscreen,
                                                                style: {
                                                                    color: '#FFFFFF',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    cursor: 'pointer'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/WorkflowSection.jsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/WorkflowSection.jsx",
                                                                lineNumber: 286,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/WorkflowSection.jsx",
                                                        lineNumber: 253,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/WorkflowSection.jsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/WorkflowSection.jsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/WorkflowSection.jsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/WorkflowSection.jsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-tag",
                                    style: {
                                        marginBottom: 'var(--space-3)'
                                    },
                                    children: "Operational Engine"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/WorkflowSection.jsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: 'var(--font-size-h2)',
                                        lineHeight: 1.15,
                                        letterSpacing: '-0.03em',
                                        marginBottom: 'var(--space-4)',
                                        color: 'var(--color-text-primary)'
                                    },
                                    children: [
                                        "See what",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/components/WorkflowSection.jsx",
                                            lineNumber: 320,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "editorial-serif",
                                            style: {
                                                color: 'var(--color-accent)',
                                                fontFamily: 'var(--font-heading-serif)'
                                            },
                                            children: "a workflow is"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WorkflowSection.jsx",
                                            lineNumber: 321,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/components/WorkflowSection.jsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "before knowing",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/components/WorkflowSection.jsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/in-line-flowify.svg",
                                            alt: "Flowify",
                                            style: {
                                                height: '0.95em',
                                                display: 'inline-block',
                                                verticalAlign: 'middle',
                                                marginTop: '0.1em'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WorkflowSection.jsx",
                                            lineNumber: 325,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/WorkflowSection.jsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '64px',
                                        height: '2px',
                                        backgroundColor: 'var(--color-accent)',
                                        marginBottom: 'var(--space-4)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/WorkflowSection.jsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/WorkflowSection.jsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/WorkflowSection.jsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/WorkflowSection.jsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .video-player-container:hover .video-controls-bar {
          opacity: 1 !important;
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/WorkflowSection.jsx",
                lineNumber: 342,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/WorkflowSection.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WorkflowSection, "BEf/+S7aNU4WQxtorxZP/fx4xdg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c = WorkflowSection;
var _c;
__turbopack_context__.k.register(_c, "WorkflowSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Services.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Services",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useReveal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const engines = [
    {
        id: 'attract',
        num: '01',
        title: 'Attract',
        subtitle: 'Goal: Get attention',
        description: 'How people discover your business.',
        color: 'color-mix(in srgb, var(--color-accent) 45%, white 55%)',
        features: [
            'Instagram',
            'Facebook Ads',
            'Google Search',
            'YouTube',
            'Referrals',
            'SEO',
            'Word of mouth'
        ]
    },
    {
        id: 'convert',
        num: '02',
        title: 'Convert',
        subtitle: 'Goal: Get them to take action',
        description: 'Turn visitors into leads or customers.',
        color: 'var(--color-accent)',
        features: [
            'Website',
            'Landing page',
            'Online store',
            'Contact form',
            'WhatsApp chat',
            'Booking system'
        ]
    },
    {
        id: 'deliver',
        num: '03',
        title: 'Deliver',
        subtitle: 'Goal: Create a great customer experience',
        description: 'Provide the product or service.',
        color: 'color-mix(in srgb, var(--color-accent) 75%, black 25%)',
        features: [
            'Restaurant serves food',
            'E-commerce ships products',
            'Agency delivers work',
            'Salon provides service'
        ]
    },
    {
        id: 'retain',
        num: '04',
        title: 'Retain',
        subtitle: 'Goal: Turn customers into repeat customers',
        description: 'Bring customers back.',
        color: 'color-mix(in srgb, var(--color-accent) 50%, black 50%)',
        features: [
            'WhatsApp updates',
            'Email marketing',
            'Loyalty programs',
            'Discounts',
            'Follow-up messages',
            'Memberships'
        ]
    }
];
const Services = ()=>{
    _s();
    const [revealRef, isVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])(0.1);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [containerWidth, setContainerWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1200);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Services.useEffect": ()=>{
            if (!containerRef.current) return;
            const observer = new ResizeObserver({
                "Services.useEffect": (entries)=>{
                    for (let entry of entries){
                        setContainerWidth(entry.contentRect.width);
                    }
                }
            }["Services.useEffect"]);
            observer.observe(containerRef.current);
            return ({
                "Services.useEffect": ()=>observer.disconnect()
            })["Services.useEffect"];
        }
    }["Services.useEffect"], []);
    const getPanelCenters = ()=>{
        const W = containerWidth;
        const G = 24; // var(--space-4) gap
        const P_total = W - 3 * G;
        const U = P_total / 5.8;
        const W_inactive = U;
        const W_active = 2.8 * U;
        const W_equal = P_total / 4;
        const calculatedCenters = [];
        let currentLeft = 0;
        for(let i = 0; i < 4; i++){
            const width = activeIndex === null ? W_equal : i === activeIndex ? W_active : W_inactive;
            calculatedCenters.push(currentLeft + width / 2);
            currentLeft += width + G;
        }
        return calculatedCenters;
    };
    const centers = getPanelCenters();
    const activeColor = activeIndex !== null ? engines[activeIndex].color : 'var(--color-border-high)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "engines",
        ref: revealRef,
        className: `reveal ${isVisible ? 'visible' : ''}`,
        style: {
            paddingTop: 'calc(var(--space-8) * 1.5)',
            paddingBottom: 'calc(var(--space-8) * 1.5)',
            borderBottom: '1px solid var(--color-border)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                ref: containerRef,
                onMouseLeave: ()=>setActiveIndex(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: '820px',
                            marginBottom: 'var(--space-6)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            textAlign: 'left'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-tag",
                                style: {
                                    marginBottom: 'var(--space-3)'
                                },
                                children: "What We Do"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Services.jsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 'var(--font-size-h2)',
                                    lineHeight: 1.15,
                                    letterSpacing: '-0.03em',
                                    marginBottom: 'var(--space-4)',
                                    color: 'var(--color-text-primary)'
                                },
                                children: [
                                    "Core ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "editorial-serif",
                                        style: {
                                            color: 'var(--color-accent)',
                                            fontFamily: 'var(--font-heading-serif)'
                                        },
                                        children: " Concept"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Services.jsx",
                                        lineNumber: 145,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Services.jsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '64px',
                                    height: '2px',
                                    backgroundColor: 'var(--color-accent)',
                                    marginBottom: 'var(--space-4)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/Services.jsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Services.jsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "services-flex-container",
                        children: engines.map((engine, idx)=>{
                            const isActive = idx === activeIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onMouseEnter: ()=>setActiveIndex(idx),
                                onClick: ()=>setActiveIndex(idx),
                                className: `service-panel ${isActive ? 'active' : ''}`,
                                style: {
                                    borderColor: isActive ? engine.color : 'var(--color-border)',
                                    boxShadow: isActive ? `8px 8px 0px ${engine.color}` : 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "active-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            marginBottom: 'var(--space-4)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'var(--font-heading-mono)',
                                                                    fontSize: '1rem',
                                                                    fontWeight: 700,
                                                                    color: engine.color
                                                                },
                                                                children: engine.num
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Services.jsx",
                                                                lineNumber: 170,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: '12px',
                                                                    height: '12px',
                                                                    borderRadius: '50%',
                                                                    backgroundColor: engine.color
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Services.jsx",
                                                                lineNumber: 180,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Services.jsx",
                                                        lineNumber: 169,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: 'var(--font-size-h3)',
                                                            fontWeight: 800,
                                                            color: 'var(--color-text-primary)',
                                                            marginBottom: '8px'
                                                        },
                                                        children: engine.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Services.jsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: 'var(--font-size-sm)',
                                                            fontFamily: 'var(--font-heading-mono)',
                                                            fontWeight: 600,
                                                            color: engine.color,
                                                            marginBottom: 'var(--space-3)',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.02em'
                                                        },
                                                        children: engine.subtitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Services.jsx",
                                                        lineNumber: 201,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: 'var(--font-size-body)',
                                                            marginBottom: 'var(--space-4)',
                                                            color: 'var(--color-text-secondary)'
                                                        },
                                                        children: engine.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Services.jsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        style: {
                                                            listStyle: 'none',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '10px',
                                                            marginBottom: 'var(--space-4)'
                                                        },
                                                        children: engine.features.map((feat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '8px',
                                                                    fontSize: 'var(--font-size-sm)',
                                                                    color: 'var(--color-text-primary)'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        size: 16,
                                                                        style: {
                                                                            color: engine.color,
                                                                            flexShrink: 0
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Services.jsx",
                                                                        lineNumber: 224,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: feat
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Services.jsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, feat, true, {
                                                                fileName: "[project]/app/components/Services.jsx",
                                                                lineNumber: 223,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Services.jsx",
                                                        lineNumber: 221,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Services.jsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#build-spec",
                                                className: "btn-core",
                                                style: {
                                                    border: `1.5px solid ${engine.color}`,
                                                    color: 'var(--color-text-primary)',
                                                    alignSelf: 'flex-start',
                                                    gap: '8px',
                                                    fontSize: '0.75rem',
                                                    padding: '8px 16px',
                                                    marginTop: 'auto'
                                                },
                                                children: [
                                                    "Deploy Engine ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 14,
                                                        style: {
                                                            color: engine.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Services.jsx",
                                                        lineNumber: 245,
                                                        columnNumber: 35
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Services.jsx",
                                                lineNumber: 232,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Services.jsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inactive-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'var(--font-heading-mono)',
                                                    fontSize: '1.2rem',
                                                    fontWeight: 700,
                                                    color: 'var(--color-text-muted)'
                                                },
                                                children: engine.num
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Services.jsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "vertical-title-text",
                                                style: {
                                                    fontFamily: 'var(--font-heading)',
                                                    fontSize: '1.1rem',
                                                    fontWeight: 800,
                                                    color: 'var(--color-text-secondary)',
                                                    whiteSpace: 'nowrap',
                                                    letterSpacing: '-0.02em',
                                                    writingMode: 'vertical-rl',
                                                    transform: 'rotate(180deg)',
                                                    marginBlock: 'auto'
                                                },
                                                children: engine.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Services.jsx",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    backgroundColor: 'var(--color-border-hover)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Services.jsx",
                                                lineNumber: 280,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Services.jsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, engine.id, true, {
                                fileName: "[project]/app/components/Services.jsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/Services.jsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pipeline-container",
                        style: {
                            width: '100%',
                            marginTop: 'var(--space-4)',
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: containerWidth,
                                height: 130,
                                viewBox: `0 0 ${containerWidth} 130`,
                                style: {
                                    display: 'block',
                                    overflow: 'visible'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                            id: "arrow-head",
                                            viewBox: "0 0 10 10",
                                            refX: "6",
                                            refY: "5",
                                            markerWidth: "6",
                                            markerHeight: "6",
                                            orient: "auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M 0 2 Q 4 5 0 8 L 8 5 Z",
                                                fill: activeColor,
                                                style: {
                                                    transition: 'fill 0.35s ease'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Services.jsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Services.jsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Services.jsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    engines.map((engine, idx)=>{
                                        const isPathActive = idx === activeIndex;
                                        const xStart = centers[idx] || 0;
                                        const xEnd = containerWidth / 2;
                                        const yStart = 0;
                                        const yEnd = 85;
                                        // Cubic Bezier curve path
                                        const pathD = `M ${xStart} ${yStart} C ${xStart} ${yEnd / 2}, ${xEnd} ${yEnd / 2}, ${xEnd} ${yEnd}`;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: pathD,
                                            fill: "none",
                                            stroke: engine.color,
                                            strokeWidth: isPathActive ? 4.5 : 2.5,
                                            opacity: isPathActive ? 1 : 0.6,
                                            style: {
                                                transition: 'd 0.35s cubic-bezier(0.16, 1, 0.3, 1), stroke-width 0.35s ease, opacity 0.35s ease'
                                            }
                                        }, engine.id, false, {
                                            fileName: "[project]/app/components/Services.jsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0));
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: containerWidth / 2,
                                        cy: 85,
                                        r: 5.5,
                                        fill: activeColor,
                                        stroke: "var(--color-bg)",
                                        strokeWidth: 2,
                                        style: {
                                            transition: 'fill 0.35s ease'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Services.jsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: `M ${containerWidth / 2} 85 L ${containerWidth / 2} 120`,
                                        fill: "none",
                                        stroke: activeColor,
                                        strokeWidth: 3.5,
                                        markerEnd: "url(#arrow-head)",
                                        style: {
                                            transition: 'stroke 0.35s ease'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Services.jsx",
                                        lineNumber: 355,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Services.jsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginTop: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'var(--font-heading-mono)',
                                            fontSize: '0.9rem',
                                            fontWeight: 700,
                                            color: 'var(--color-text-primary)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.04em',
                                            transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
                                            textAlign: 'center',
                                            backgroundColor: 'var(--color-surface)',
                                            border: `2px solid ${activeColor}`,
                                            boxShadow: `6px 6px 0px ${activeColor}`,
                                            padding: '12px 24px',
                                            borderRadius: 'var(--radius-sm)',
                                            display: 'inline-block'
                                        },
                                        children: "The flow that every crore company has used"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Services.jsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            marginTop: '16px',
                                            fontSize: 'var(--font-size-body)',
                                            color: 'var(--color-text-secondary)',
                                            fontFamily: 'var(--font-body)',
                                            textAlign: 'center',
                                            maxWidth: '520px',
                                            lineHeight: 'var(--line-height-body)',
                                            transition: 'color 0.35s ease',
                                            fontStyle: 'italic'
                                        },
                                        children: "Right now yourself in the convert section. As yourself watching you can be the potential lead for our agency.(Wanna be 😏?)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Services.jsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:hello@flowify.agency?subject=Operational Inquiry",
                                        className: "underline underline-offset-4",
                                        style: {
                                            marginTop: '12px',
                                            transition: 'color 0.35s ease',
                                            fontWeight: 600,
                                            textDecoration: 'underline',
                                            textUnderlineOffset: '4px'
                                        },
                                        children: "Click to contact"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Services.jsx",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Services.jsx",
                                lineNumber: 366,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Services.jsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Services.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .services-flex-container {
          display: flex;
          gap: var(--space-4);
          width: 100%;
          min-height: 540px;
          align-items: stretch;
        }

        .service-panel {
          position: relative;
          overflow: hidden;
          flex: 1;
          transition: flex 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          min-width: 0;
          background-color: var(--color-surface);
          border-width: 2px;
          border-style: solid;
          border-color: var(--color-border);
          border-radius: var(--radius-sm);
        }

        .service-panel.active {
          flex: 2.8;
          cursor: default;
        }

        /* Desktop specific content layout with smooth transitions */
        .service-panel .active-content {
          position: absolute;
          top: var(--space-5);
          left: var(--space-5);
          right: var(--space-5);
          bottom: var(--space-5);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      visibility 0.25s;
          visibility: hidden;
          pointer-events: none;
          width: calc(100% - 48px);
          height: calc(100% - 48px);
        }

        .service-panel.active .active-content {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
          pointer-events: auto;
          transition-delay: 0.1s; /*snappy, less delay*/
        }

        .service-panel .inactive-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding-block: var(--space-5);
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                      visibility 0.2s;
          visibility: visible;
          pointer-events: auto;
        }

        .service-panel.active .inactive-content {
          opacity: 0;
          transform: scale(0.92);
          visibility: hidden;
          pointer-events: none;
        }

        .service-panel:hover:not(.active) {
          border-color: var(--color-border-high);
          background-color: var(--color-surface-subtle);
        }

        /* Mobile Responsive Overrides */
        @media (max-width: 767px) {
          .services-flex-container {
            flex-direction: column;
            min-height: auto;
            gap: var(--space-3);
          }

          .service-panel {
            width: 100% !important;
            height: auto !important;
            flex: none !important;
            padding: var(--space-4) !important;
            transition: border-color var(--transition-normal), 
                        box-shadow var(--transition-normal),
                        background-color var(--transition-normal) !important;
          }

          .service-panel .active-content {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            opacity: 1 !important;
            transform: none !important;
            visibility: visible !important;
            pointer-events: auto !important;
            display: flex !important;
            width: 100% !important;
            height: auto !important;
          }

          .service-panel .inactive-content {
            display: none !important;
          }
          
          /* For mobile, simplify accordion by showing headings and expanding details on click */
          .service-panel:not(.active) .active-content ul,
          .service-panel:not(.active) .active-content p,
          .service-panel:not(.active) .active-content a {
            display: none !important;
          }
          
          .service-panel:not(.active) {
            box-shadow: none !important;
            border-color: var(--color-border) !important;
          }
        }

        .pipeline-container {
          display: block;
        }
        @media (max-width: 767px) {
          .pipeline-container {
            display: none !important;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/Services.jsx",
                lineNumber: 432,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Services.jsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Services, "P+nsEb2NDqR2fxEZ/jwtABDcutU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/DemoMenu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoMenu",
    ()=>DemoMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useReveal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const menuItems = [
    {
        id: 'vada-pav',
        name: 'Special Vada Pav',
        price: 1,
        desc: 'Classic Mumbai street food'
    },
    {
        id: 'filter-coffee',
        name: 'Filter Coffee',
        price: 1,
        desc: 'Traditional South Indian brew'
    },
    {
        id: 'masala-dosa',
        name: 'Masala Dosa',
        price: 1,
        desc: 'Crispy crepe with potato masala'
    },
    {
        id: 'garlic-naan',
        name: 'Butter Garlic Naan',
        price: 1,
        desc: 'Soft clay-oven flatbread'
    }
];
const DemoMenu = ()=>{
    _s();
    const [revealRef, isVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])(0.15);
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('menu'); // 'menu' | 'cart' | 'payment' | 'whatsapp'
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [phoneNumber, setPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [instructions, setInstructions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        loading: false,
        requested: false,
        name: '',
        address: '',
        lat: null,
        lon: null
    });
    const [paymentStatus, setPaymentStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle'); // 'idle' | 'processing' | 'success'
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            type: 'system',
            text: '[FLOWIFY ENGINE v1.2.0 ONLINE]'
        },
        {
            type: 'system',
            text: '[Ready for incoming cafe sandbox connection...]'
        }
    ]);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const terminalScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const triggerGeolocation = async ()=>{
        setLocation({
            loading: true,
            requested: true,
            name: '',
            address: '',
            lat: null,
            lon: null
        });
        addLog('Initiating geolocation relay...', 'info');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position)=>{
                const { latitude, longitude } = position.coords;
                addLog(`GPS coordinates captured: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`, 'success');
                try {
                    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`, {
                        headers: {
                            'User-Agent': 'FlowifyDemo/1.0'
                        }
                    });
                    const data = await res.json();
                    const displayName = data.display_name;
                    const city = data.address.city || data.address.town || data.address.village || data.address.suburb || 'Unknown Local Area';
                    setLocation({
                        loading: false,
                        requested: true,
                        name: city,
                        address: displayName,
                        lat: latitude,
                        lon: longitude
                    });
                    addLog(`GeoLog verified: ${city} - ${displayName.slice(0, 45)}...`, 'success');
                } catch (err) {
                    fallbackIPLocation();
                }
            }, (error)=>{
                addLog(`GPS permission denied/failed: ${error.message}. Falling back to IP-based location...`, 'warn');
                fallbackIPLocation();
            });
        } else {
            fallbackIPLocation();
        }
    };
    const fallbackIPLocation = async ()=>{
        try {
            const res = await fetch('https://ipapi.co/json/');
            const data = await res.json();
            const cityState = `${data.city}, ${data.region}`;
            const fullAddress = `${data.city}, ${data.region}, ${data.postal}, ${data.country_name} (via IP Relays)`;
            setLocation({
                loading: false,
                requested: true,
                name: cityState,
                address: fullAddress,
                lat: data.latitude,
                lon: data.longitude
            });
            addLog(`GeoLog IP verified: ${cityState}`, 'success');
        } catch (err) {
            setLocation({
                loading: false,
                requested: true,
                name: 'Surat, Gujarat',
                address: 'Ring Road, Surat, Gujarat, 395002, India (Demo Sandbox Fallback)',
                lat: 21.1702,
                lon: 72.8311
            });
            addLog('GeoLog: Network request blocked. Falling back to default Surat Sandbox.', 'warn');
        }
    };
    // Auto scroll logs internally
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoMenu.useEffect": ()=>{
            const el = terminalScrollRef.current;
            if (el) {
                el.scrollTop = el.scrollHeight;
            }
        }
    }["DemoMenu.useEffect"], [
        logs
    ]);
    // Auto scroll chat internally
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoMenu.useEffect": ()=>{
            const el = chatScrollRef.current;
            if (el) {
                el.scrollTop = el.scrollHeight;
            }
        }
    }["DemoMenu.useEffect"], [
        chatMessages,
        isTyping
    ]);
    const addLog = (text, type = 'info')=>{
        const timestamp = new Date().toLocaleTimeString();
        setLogs((prev)=>[
                ...prev,
                {
                    type,
                    text: `[${timestamp}] ${text}`
                }
            ]);
    };
    const addToCart = (item)=>{
        setCart((prev)=>{
            const currentQty = prev[item.id]?.qty || 0;
            const updated = {
                ...prev,
                [item.id]: {
                    ...item,
                    qty: currentQty + 1
                }
            };
            addLog(`Cart item added: ${item.name} (x${currentQty + 1})`, 'info');
            return updated;
        });
    };
    const removeFromCart = (item)=>{
        if (!cart[item.id]) return;
        setCart((prev)=>{
            const currentQty = prev[item.id].qty;
            const updated = {
                ...prev
            };
            if (currentQty <= 1) {
                delete updated[item.id];
                addLog(`Cart item removed: ${item.name}`, 'warn');
            } else {
                updated[item.id] = {
                    ...item,
                    qty: currentQty - 1
                };
                addLog(`Cart item decremented: ${item.name} (x${currentQty - 1})`, 'warn');
            }
            return updated;
        });
    };
    const getCartTotalItems = ()=>{
        return Object.values(cart).reduce((acc, curr)=>acc + curr.qty, 0);
    };
    const handleProceedToCart = ()=>{
        setScreen('cart');
        addLog('Navigated to checkout cart. Awaiting phone details...', 'success');
    };
    const handlePay = ()=>{
        if (!phoneNumber || phoneNumber.trim().length < 10) {
            alert('Please enter a valid phone number');
            return;
        }
        setScreen('payment');
        setPaymentStatus('processing');
        addLog(`Initiating Razorpay gateway for ₹1.00...`, 'info');
        addLog(`Ingesting lead endpoint phone: ${phoneNumber}`, 'success');
        if (location.lat && location.lon) {
            addLog(`GeoLog verifying order node from: Lat ${location.lat.toFixed(4)}, Lon ${location.lon.toFixed(4)} (${location.name})`, 'success');
        } else {
            addLog(`GeoLog verifying order node from default backup: ${location.name}`, 'warn');
        }
        if (instructions.trim()) {
            addLog(`Custom instruction logged: "${instructions}"`, 'info');
        }
        // Simulate payment process
        setTimeout(()=>{
            setPaymentStatus('success');
            addLog('[Razorpay Webhook] Received payment.confirm (status: SUCCESS)', 'success');
            addLog('[Tally ERP API] Creating Sales Receipt Voucher... Reconciled.', 'success');
            addLog('[Tally ERP API] Voucher #CAF-2026-9842 synchronized.', 'info');
            // Transition to WhatsApp simulation
            setTimeout(()=>{
                setScreen('whatsapp');
                simulateWhatsAppMessage();
            }, 1500);
        }, 2000);
    };
    const simulateWhatsAppMessage = ()=>{
        setIsTyping(true);
        addLog('[WhatsApp Cloud API] Dispatching template \'flowify_cafe_bill\'...', 'info');
        setTimeout(()=>{
            setIsTyping(false);
            const itemsList = Object.values(cart).map((item)=>`• ${item.name} (x${item.qty})`).join('\n');
            const instructionsPart = instructions.trim() ? `\n*Instructions:* ${instructions.trim()}` : '';
            const addressPart = location.address ? `\n*Delivery Address:* ${location.address}` : '';
            setChatMessages([
                {
                    sender: 'system',
                    text: `*FLOWIFY CAFÉ RECEIPT* ☕\n\nOrder ID: #FLW-9842\nPhone: ${phoneNumber}\n\n*YOUR ORDER:*\n${itemsList}\n------------------------${instructionsPart}${addressPart}\n------------------------\n*Total Paid: ₹1.00* via UPI\n\n*Status:* Ledger pushed to Tally ERP. WhatsApp billing relay completed successfully. 🎉`
                }
            ]);
            addLog('[WhatsApp Cloud API] Message status: DELIVERED (0.3s delay)', 'success');
            addLog('[System] Engine cycle completed successfully.', 'system');
            // Second message follow up
            setTimeout(()=>{
                setIsTyping(true);
                setTimeout(()=>{
                    setIsTyping(false);
                    setChatMessages((prev)=>[
                            ...prev,
                            {
                                sender: 'system',
                                text: `This is a live operational demonstration. We just captured your lead, simulated a payment confirmation, reconciled Tally accounting, and triggered this WhatsApp message in real-time. This is how we eliminate manual bottlenecks. ⚡`
                            }
                        ]);
                }, 1500);
            }, 1000);
        }, 2000);
    };
    const resetDemo = ()=>{
        setCart({});
        setPhoneNumber('');
        setInstructions('');
        setScreen('menu');
        setPaymentStatus('idle');
        setChatMessages([]);
        setLocation({
            loading: false,
            requested: false,
            name: '',
            address: '',
            lat: null,
            lon: null
        });
        setLogs([
            {
                type: 'system',
                text: '[FLOWIFY ENGINE v1.2.0 ONLINE]'
            },
            {
                type: 'system',
                text: '[Ready for incoming cafe sandbox connection...]'
            }
        ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "demo-menu",
        ref: revealRef,
        className: `reveal ${isVisible ? 'visible' : ''}`,
        style: {
            paddingTop: 'var(--space-8)',
            paddingBottom: 'var(--space-8)',
            borderBottom: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg)',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: '820px',
                            marginBottom: 'var(--space-6)',
                            textAlign: 'left'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-tag",
                                style: {
                                    marginBottom: 'var(--space-3)'
                                },
                                children: "Live Demonstration"
                            }, void 0, false, {
                                fileName: "[project]/app/components/DemoMenu.jsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 'var(--font-size-h2)',
                                    lineHeight: 1.15,
                                    letterSpacing: '-0.03em',
                                    marginBottom: 'var(--space-4)',
                                    color: 'var(--color-text-primary)'
                                },
                                children: [
                                    "Live ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "editorial-serif",
                                        style: {
                                            color: 'var(--color-accent)',
                                            fontFamily: 'var(--font-heading-serif)'
                                        },
                                        children: "Operational Sandbox"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/DemoMenu.jsx",
                                        lineNumber: 271,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/DemoMenu.jsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 'var(--font-size-body)',
                                    color: 'var(--color-text-secondary)'
                                },
                                children: "Interact with our simulated restaurant menu app below to experience a real-time Flowify automation relay."
                            }, void 0, false, {
                                fileName: "[project]/app/components/DemoMenu.jsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/DemoMenu.jsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: 'var(--space-5)',
                            alignItems: 'stretch'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mock-phone-shell",
                                    style: {
                                        width: '100%',
                                        maxWidth: '360px',
                                        height: '600px',
                                        backgroundColor: 'var(--color-surface-subtle)',
                                        border: '4px solid var(--color-text-primary)',
                                        borderRadius: '24px',
                                        boxShadow: '10px 10px 0px var(--color-text-primary)',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                height: '24px',
                                                backgroundColor: 'var(--color-text-primary)',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                paddingHorizontal: '16px',
                                                color: 'var(--color-surface)',
                                                fontSize: '0.65rem',
                                                fontFamily: 'var(--font-heading-mono)',
                                                fontWeight: 700,
                                                paddingInline: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "FlowNet 5G"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 321,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "23:09"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 322,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                            lineNumber: 306,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        screen === 'menu' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                flexGrow: 1,
                                                backgroundColor: 'var(--color-surface)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '12px var(--space-3)',
                                                        borderBottom: '2px solid var(--color-text-primary)',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        backgroundColor: 'var(--color-surface-subtle)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: 'var(--font-heading)',
                                                                fontWeight: 800,
                                                                fontSize: '1rem',
                                                                color: 'var(--color-text-primary)'
                                                            },
                                                            children: "FlowCafe ☕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 340,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: 'relative'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                                    size: 18,
                                                                    style: {
                                                                        color: 'var(--color-text-primary)'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 344,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                getCartTotalItems() > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        position: 'absolute',
                                                                        top: '-8px',
                                                                        right: '-8px',
                                                                        backgroundColor: 'var(--color-accent)',
                                                                        color: '#000',
                                                                        fontSize: '0.6rem',
                                                                        fontWeight: 800,
                                                                        borderRadius: '50%',
                                                                        width: '14px',
                                                                        height: '14px',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center'
                                                                    },
                                                                    children: getCartTotalItems()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 346,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 343,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 330,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        overflowY: 'auto',
                                                        flexGrow: 1,
                                                        padding: '12px'
                                                    },
                                                    className: "menu-list-scroll",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: '0.75rem',
                                                                fontFamily: 'var(--font-heading-mono)',
                                                                color: 'var(--color-text-muted)',
                                                                marginBottom: '12px',
                                                                textTransform: 'uppercase'
                                                            },
                                                            children: "SELECT ITEMS (All priced at ₹1 for sandbox)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 370,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                gap: '10px'
                                                            },
                                                            children: menuItems.map((item)=>{
                                                                const qty = cart[item.id]?.qty || 0;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        padding: '10px',
                                                                        border: '1.5px solid var(--color-border)',
                                                                        borderRadius: 'var(--radius-sm)',
                                                                        backgroundColor: 'var(--color-surface)',
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                        alignItems: 'center',
                                                                        transition: 'border-color 0.2s'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                maxWidth: '65%'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    style: {
                                                                                        fontSize: '0.85rem',
                                                                                        fontWeight: 800,
                                                                                        color: 'var(--color-text-primary)'
                                                                                    },
                                                                                    children: item.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                                    lineNumber: 391,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    style: {
                                                                                        fontSize: '0.7rem',
                                                                                        color: 'var(--color-text-secondary)',
                                                                                        marginTop: '2px'
                                                                                    },
                                                                                    children: item.desc
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                                    lineNumber: 392,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontFamily: 'var(--font-heading-mono)',
                                                                                        fontSize: '0.75rem',
                                                                                        fontWeight: 700,
                                                                                        color: 'var(--color-accent)',
                                                                                        display: 'inline-block',
                                                                                        marginTop: '4px'
                                                                                    },
                                                                                    children: [
                                                                                        "₹",
                                                                                        item.price
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                                    lineNumber: 393,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                                            lineNumber: 390,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                gap: '8px',
                                                                                border: '1.5px solid var(--color-text-primary)',
                                                                                borderRadius: 'var(--radius-sm)',
                                                                                overflow: 'hidden'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>removeFromCart(item),
                                                                                    style: {
                                                                                        padding: '4px 10px',
                                                                                        backgroundColor: 'var(--color-surface-subtle)',
                                                                                        fontWeight: 800,
                                                                                        fontSize: '0.8rem'
                                                                                    },
                                                                                    children: "-"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                                    lineNumber: 400,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: '0.8rem',
                                                                                        fontWeight: 800,
                                                                                        minWidth: '12px',
                                                                                        textAlign: 'center',
                                                                                        fontFamily: 'var(--font-heading-mono)'
                                                                                    },
                                                                                    children: qty
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                                    lineNumber: 406,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>addToCart(item),
                                                                                    style: {
                                                                                        padding: '4px 10px',
                                                                                        backgroundColor: 'var(--color-surface-subtle)',
                                                                                        fontWeight: 800,
                                                                                        fontSize: '0.8rem'
                                                                                    },
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                                    lineNumber: 409,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                                            lineNumber: 399,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, item.id, true, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0));
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 373,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 369,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                getCartTotalItems() > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleProceedToCart,
                                                    style: {
                                                        padding: '14px',
                                                        backgroundColor: 'var(--color-text-primary)',
                                                        color: 'var(--color-surface)',
                                                        fontWeight: 800,
                                                        fontSize: '0.85rem',
                                                        fontFamily: 'var(--font-heading-mono)',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.04em',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        cursor: 'pointer'
                                                    },
                                                    children: [
                                                        "View Cart & Checkout (",
                                                        getCartTotalItems(),
                                                        " items) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 442,
                                                            columnNumber: 74
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 424,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        screen === 'cart' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                flexGrow: 1,
                                                backgroundColor: 'var(--color-surface)',
                                                padding: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        marginBottom: 'var(--space-3)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: {
                                                                fontSize: '1.1rem',
                                                                fontWeight: 800
                                                            },
                                                            children: "Your Cart"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 452,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setScreen('menu'),
                                                            style: {
                                                                fontSize: '0.75rem',
                                                                fontWeight: 700,
                                                                textDecoration: 'underline'
                                                            },
                                                            children: "Back"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 453,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 451,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        overflowY: 'auto',
                                                        flexGrow: 1,
                                                        marginBottom: '16px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                gap: '8px'
                                                            },
                                                            children: Object.values(cart).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                        fontSize: '0.8rem',
                                                                        borderBottom: '1px solid var(--color-border)',
                                                                        paddingBottom: '8px'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                item.name,
                                                                                " (x",
                                                                                item.qty,
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                                            lineNumber: 460,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: 'var(--font-heading-mono)',
                                                                                fontWeight: 700
                                                                            },
                                                                            children: [
                                                                                "₹",
                                                                                item.price * item.qty
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                                            lineNumber: 461,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, item.id, true, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 459,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 457,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                marginTop: '16px',
                                                                fontWeight: 800,
                                                                fontSize: '0.9rem'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Total Amount:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: 'var(--color-accent)'
                                                                    },
                                                                    children: [
                                                                        "₹1.00 ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '0.65rem',
                                                                                textDecoration: 'line-through',
                                                                                color: 'var(--color-text-muted)',
                                                                                marginLeft: '4px'
                                                                            },
                                                                            children: [
                                                                                "₹",
                                                                                getCartTotalItems()
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                                            lineNumber: 468,
                                                                            columnNumber: 76
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 468,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 466,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginTop: '24px',
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                gap: '8px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "cart-phone",
                                                                    style: {
                                                                        fontFamily: 'var(--font-heading-mono)',
                                                                        fontSize: '0.7rem',
                                                                        fontWeight: 700,
                                                                        color: 'var(--color-text-primary)',
                                                                        textTransform: 'uppercase',
                                                                        letterSpacing: '0.04em'
                                                                    },
                                                                    children: "Enter WhatsApp Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 473,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "cart-phone",
                                                                    type: "tel",
                                                                    value: phoneNumber,
                                                                    onChange: (e)=>setPhoneNumber(e.target.value),
                                                                    placeholder: "+91 98765 43210",
                                                                    style: {
                                                                        width: '100%',
                                                                        border: '2px solid var(--color-text-primary)',
                                                                        borderRadius: 'var(--radius-sm)',
                                                                        padding: '10px 12px',
                                                                        fontSize: '0.85rem',
                                                                        backgroundColor: 'var(--color-bg)'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontSize: '0.65rem',
                                                                        color: 'var(--color-text-secondary)',
                                                                        fontStyle: 'italic'
                                                                    },
                                                                    children: "This is where the simulated WhatsApp invoice bill will be dispatched."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 501,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 472,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginTop: '16px',
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                gap: '8px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "cart-instructions",
                                                                    style: {
                                                                        fontFamily: 'var(--font-heading-mono)',
                                                                        fontSize: '0.7rem',
                                                                        fontWeight: 700,
                                                                        color: 'var(--color-text-primary)',
                                                                        textTransform: 'uppercase',
                                                                        letterSpacing: '0.04em'
                                                                    },
                                                                    children: "Custom Instructions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 508,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    id: "cart-instructions",
                                                                    rows: 2,
                                                                    value: instructions,
                                                                    onChange: (e)=>setInstructions(e.target.value),
                                                                    placeholder: "e.g., Make it extra spicy, no ice",
                                                                    style: {
                                                                        width: '100%',
                                                                        border: '2px solid var(--color-text-primary)',
                                                                        borderRadius: 'var(--radius-sm)',
                                                                        padding: '10px 12px',
                                                                        fontSize: '0.8rem',
                                                                        backgroundColor: 'var(--color-bg)',
                                                                        resize: 'none'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 521,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 507,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginTop: '16px',
                                                                padding: '10px',
                                                                border: '1.5px solid var(--color-text-primary)',
                                                                backgroundColor: 'var(--color-surface-subtle)',
                                                                borderRadius: 'var(--radius-sm)'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '0.65rem',
                                                                        fontFamily: 'var(--font-heading-mono)',
                                                                        fontWeight: 700,
                                                                        color: 'var(--color-accent)',
                                                                        textTransform: 'uppercase',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '4px'
                                                                    },
                                                                    children: "📍 Geo-Verified Origin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 541,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                !location.requested ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        marginTop: '6px'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: '0.7rem',
                                                                                color: 'var(--color-text-secondary)',
                                                                                marginBottom: '8px'
                                                                            },
                                                                            children: "We require location to verify your order area node."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                                            lineNumber: 546,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: triggerGeolocation,
                                                                            style: {
                                                                                width: '100%',
                                                                                padding: '6px 12px',
                                                                                backgroundColor: 'var(--color-text-primary)',
                                                                                color: 'var(--color-surface)',
                                                                                fontFamily: 'var(--font-heading-mono)',
                                                                                fontSize: '0.7rem',
                                                                                fontWeight: 700,
                                                                                textTransform: 'uppercase',
                                                                                cursor: 'pointer',
                                                                                border: 'none',
                                                                                borderRadius: 'var(--radius-sm)',
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                justifyContent: 'center',
                                                                                gap: '4px'
                                                                            },
                                                                            children: "Verify Delivery Location"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                                            lineNumber: 549,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 545,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)) : location.loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontSize: '0.75rem',
                                                                        color: 'var(--color-text-secondary)',
                                                                        marginTop: '4px'
                                                                    },
                                                                    children: "Resolving billing address..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 573,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        marginTop: '4px'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: '0.8rem',
                                                                                fontWeight: 800,
                                                                                color: 'var(--color-text-primary)'
                                                                            },
                                                                            children: location.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                                            lineNumber: 576,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: '0.7rem',
                                                                                color: 'var(--color-text-secondary)',
                                                                                marginTop: '2px',
                                                                                lineHeight: 1.3
                                                                            },
                                                                            children: location.address
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                                            lineNumber: 577,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 575,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 540,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 456,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    disabled: !location.requested || location.loading,
                                                    onClick: handlePay,
                                                    style: {
                                                        width: '100%',
                                                        padding: '14px',
                                                        backgroundColor: !location.requested || location.loading ? 'var(--color-surface-subtle)' : 'var(--color-accent)',
                                                        color: !location.requested || location.loading ? 'var(--color-text-muted)' : '#000',
                                                        border: '2px solid var(--color-text-primary)',
                                                        boxShadow: !location.requested || location.loading ? 'none' : '4px 4px 0px var(--color-text-primary)',
                                                        fontWeight: 800,
                                                        fontSize: '0.85rem',
                                                        fontFamily: 'var(--font-heading-mono)',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.04em',
                                                        cursor: !location.requested || location.loading ? 'not-allowed' : 'pointer',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    },
                                                    children: !location.requested ? 'Verify Location First' : location.loading ? 'Resolving Location...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            "Pay ₹1.00 ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/DemoMenu.jsx",
                                                                lineNumber: 605,
                                                                columnNumber: 127
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 583,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                            lineNumber: 450,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        screen === 'payment' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                flexGrow: 1,
                                                backgroundColor: 'var(--color-surface)',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '24px'
                                            },
                                            children: paymentStatus === 'processing' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    textAlign: 'center',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    gap: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "animate-spin",
                                                        size: 40,
                                                        style: {
                                                            color: 'var(--color-accent)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/DemoMenu.jsx",
                                                        lineNumber: 615,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: '1rem',
                                                            fontWeight: 800,
                                                            fontFamily: 'var(--font-heading-mono)'
                                                        },
                                                        children: "PROCESSING SANDBOX PAYMENT..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/DemoMenu.jsx",
                                                        lineNumber: 616,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            color: 'var(--color-text-secondary)'
                                                        },
                                                        children: "Awaiting Secure Gateway Loop Confirmation (₹1.00)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/DemoMenu.jsx",
                                                        lineNumber: 617,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/DemoMenu.jsx",
                                                lineNumber: 614,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    textAlign: 'center',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    gap: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 48,
                                                        style: {
                                                            color: 'var(--color-accent)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/DemoMenu.jsx",
                                                        lineNumber: 621,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: '1.1rem',
                                                            fontWeight: 800,
                                                            color: 'var(--color-accent)',
                                                            fontFamily: 'var(--font-heading-mono)'
                                                        },
                                                        children: "PAYMENT SUCCESSFUL!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/DemoMenu.jsx",
                                                        lineNumber: 622,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            color: 'var(--color-text-secondary)'
                                                        },
                                                        children: "Invoice template is compiling on our WhatsApp relay engine."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/DemoMenu.jsx",
                                                        lineNumber: 623,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/DemoMenu.jsx",
                                                lineNumber: 620,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                            lineNumber: 612,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        screen === 'whatsapp' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                flexGrow: 1,
                                                backgroundColor: 'var(--color-surface-subtle)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '10px 14px',
                                                        backgroundColor: '#075E54',
                                                        color: '#fff',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '32px',
                                                                height: '32px',
                                                                borderRadius: '50%',
                                                                backgroundColor: '#128C7E',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                fontWeight: 700,
                                                                fontSize: '0.85rem'
                                                            },
                                                            children: "F"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 643,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                flexDirection: 'column'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '0.85rem',
                                                                        fontWeight: 700,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '4px'
                                                                    },
                                                                    children: [
                                                                        "Flowify Alerts ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                            size: 14,
                                                                            fill: "#fff",
                                                                            style: {
                                                                                color: '#075E54'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                                            lineNumber: 660,
                                                                            columnNumber: 40
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 659,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '0.6rem',
                                                                        opacity: 0.8
                                                                    },
                                                                    children: "Official Business Node"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 662,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 658,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 633,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: chatScrollRef,
                                                    style: {
                                                        flexGrow: 1,
                                                        padding: '12px',
                                                        overflowY: 'auto',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '12px'
                                                    },
                                                    className: "whatsapp-bubbles-container",
                                                    children: [
                                                        chatMessages.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    backgroundColor: '#DCF8C6',
                                                                    border: '1px solid #c7e5b2',
                                                                    borderRadius: '8px',
                                                                    padding: '10px 12px',
                                                                    maxWidth: '85%',
                                                                    alignSelf: 'flex-start',
                                                                    fontSize: '0.75rem',
                                                                    color: '#000',
                                                                    whiteSpace: 'pre-wrap',
                                                                    boxShadow: '0 1px 1px rgba(0,0,0,0.1)'
                                                                },
                                                                children: msg.text
                                                            }, index, false, {
                                                                fileName: "[project]/app/components/DemoMenu.jsx",
                                                                lineNumber: 673,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))),
                                                        isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                backgroundColor: '#FFF',
                                                                borderRadius: '8px',
                                                                padding: '8px 12px',
                                                                alignSelf: 'flex-start',
                                                                fontSize: '0.75rem',
                                                                color: 'var(--color-text-secondary)',
                                                                fontStyle: 'italic'
                                                            },
                                                            children: "Flowify Alerts is typing..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 694,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 667,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '12px',
                                                        borderTop: '1px solid var(--color-border)',
                                                        backgroundColor: 'var(--color-surface)',
                                                        display: 'flex',
                                                        justifyContent: 'center'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: resetDemo,
                                                        style: {
                                                            padding: '10px 16px',
                                                            backgroundColor: 'var(--color-text-primary)',
                                                            color: 'var(--color-surface)',
                                                            border: '2px solid var(--color-text-primary)',
                                                            boxShadow: '3px 3px 0px var(--color-text-primary)',
                                                            fontFamily: 'var(--font-heading-mono)',
                                                            fontSize: '0.75rem',
                                                            fontWeight: 700,
                                                            textTransform: 'uppercase',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '6px'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.transform = 'translate(-1px, -1px)';
                                                            e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-text-primary)';
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.transform = 'none';
                                                            e.currentTarget.style.boxShadow = '3px 3px 0px var(--color-text-primary)';
                                                        },
                                                        children: [
                                                            "Reset Simulator ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/DemoMenu.jsx",
                                                                lineNumber: 738,
                                                                columnNumber: 39
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/DemoMenu.jsx",
                                                        lineNumber: 712,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 711,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                            lineNumber: 631,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/DemoMenu.jsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'stretch'
                                },
                                children: screen === 'cart' ? !location.requested ? /* 1. Radar Screen prior to Location Verification */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flexGrow: 1,
                                        border: '2px solid var(--color-text-primary)',
                                        backgroundColor: '#0F0F13',
                                        borderRadius: 'var(--radius-sm)',
                                        boxShadow: '8px 8px 0px var(--color-text-primary)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: 'var(--space-6)',
                                        minHeight: '400px',
                                        maxHeight: '600px',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "radar-grid",
                                            style: {
                                                width: '180px',
                                                height: '180px',
                                                borderRadius: '50%',
                                                border: '2px dashed rgba(57, 255, 20, 0.2)',
                                                position: 'relative',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginBottom: 'var(--space-4)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '120px',
                                                        height: '120px',
                                                        borderRadius: '50%',
                                                        border: '1.5px dashed rgba(57, 255, 20, 0.3)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 780,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '60px',
                                                        height: '60px',
                                                        borderRadius: '50%',
                                                        border: '1px dashed rgba(57, 255, 20, 0.4)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 781,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: 'absolute',
                                                        width: '100%',
                                                        height: '1px',
                                                        backgroundColor: 'rgba(57, 255, 20, 0.15)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 782,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: 'absolute',
                                                        height: '100%',
                                                        width: '1px',
                                                        backgroundColor: 'rgba(57, 255, 20, 0.15)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 783,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "radar-sweep",
                                                    style: {
                                                        position: 'absolute',
                                                        width: '50%',
                                                        height: '50%',
                                                        top: 0,
                                                        left: 0,
                                                        transformOrigin: 'bottom right',
                                                        background: 'linear-gradient(45deg, rgba(57, 255, 20, 0.15) 0%, transparent 100%)',
                                                        borderRight: '1px solid rgba(57, 255, 20, 0.5)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 784,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                            lineNumber: 769,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontFamily: 'var(--font-heading-mono)',
                                                color: '#39FF14',
                                                fontSize: '0.9rem',
                                                fontWeight: 800,
                                                textAlign: 'center',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                marginBottom: '8px'
                                            },
                                            children: "[ Geofencing & Routing Gateway ]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                            lineNumber: 796,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '0.75rem',
                                                color: 'var(--color-text-secondary)',
                                                textAlign: 'center',
                                                maxWidth: '280px',
                                                lineHeight: 1.4
                                            },
                                            children: "Awaiting geofencing authorization from user device. Trigger location request in the simulator to verify order delivery zone."
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                            lineNumber: 808,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                    lineNumber: 751,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /* 2. Location Enabled: Show Radar Lock + Terminal stacked */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 'var(--space-4)',
                                        height: '100%',
                                        justifyContent: 'stretch'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                border: '2px solid var(--color-text-primary)',
                                                backgroundColor: '#0F0F13',
                                                borderRadius: 'var(--radius-sm)',
                                                boxShadow: '4px 4px 0px var(--color-text-primary)',
                                                padding: '12px 16px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '16px',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "radar-grid",
                                                    style: {
                                                        width: '80px',
                                                        height: '80px',
                                                        borderRadius: '50%',
                                                        border: '1.5px dashed rgba(57, 255, 20, 0.4)',
                                                        position: 'relative',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        flexShrink: 0
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '40px',
                                                                height: '40px',
                                                                borderRadius: '50%',
                                                                border: '1px dashed rgba(57, 255, 20, 0.5)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 846,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: 'absolute',
                                                                width: '8px',
                                                                height: '8px',
                                                                borderRadius: '50%',
                                                                backgroundColor: '#39FF14',
                                                                boxShadow: '0 0 10px #39FF14',
                                                                animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 847,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 835,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flexGrow: 1,
                                                        fontFamily: 'var(--font-heading-mono)',
                                                        fontSize: '0.75rem',
                                                        color: '#39FF14'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontWeight: 800,
                                                                textTransform: 'uppercase',
                                                                marginBottom: '4px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '6px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "live-indicator-dot"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 860,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " NODE GEOLOCKED"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 859,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: 'var(--color-text-secondary)',
                                                                fontSize: '0.7rem'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Coordinates:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 863,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                location.lat?.toFixed(5),
                                                                "°N, ",
                                                                location.lon?.toFixed(5),
                                                                "°E"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 862,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: 'var(--color-text-secondary)',
                                                                fontSize: '0.7rem',
                                                                marginTop: '2px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Order Radius:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                                    lineNumber: 866,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                location.loading ? 'Calculating...' : 'Geolocked within 5.0km',
                                                                " (Node: ",
                                                                location.name || 'Resolving...',
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 865,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: '#fff',
                                                                fontSize: '0.7rem',
                                                                marginTop: '4px',
                                                                textOverflow: 'ellipsis',
                                                                overflow: 'hidden',
                                                                whiteSpace: 'nowrap',
                                                                maxWidth: '240px'
                                                            },
                                                            children: location.address || 'Resolving address...'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 868,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 858,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                            lineNumber: 821,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flexGrow: 1,
                                                border: '2px solid var(--color-text-primary)',
                                                backgroundColor: '#0F0F13',
                                                color: '#39FF14',
                                                borderRadius: 'var(--radius-sm)',
                                                boxShadow: '8px 8px 0px var(--color-text-primary)',
                                                fontFamily: 'var(--font-heading-mono)',
                                                fontSize: '0.8rem',
                                                lineHeight: 1.5,
                                                padding: 'var(--space-4)',
                                                overflowY: 'auto',
                                                minHeight: '260px',
                                                maxHeight: '440px',
                                                display: 'flex',
                                                flexDirection: 'column'
                                            },
                                            className: "terminal-console-panel",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        borderBottom: '1.5px solid #222',
                                                        paddingBottom: '8px',
                                                        marginBottom: '12px',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        fontSize: '0.7rem',
                                                        color: '#6E6E7A'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "OPERATIONAL INTEGRATION RELAYS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 906,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: 'var(--color-accent)'
                                                            },
                                                            children: "● INGEST ACTIVE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 907,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 894,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: terminalScrollRef,
                                                    style: {
                                                        flexGrow: 1,
                                                        overflowY: 'auto'
                                                    },
                                                    className: "terminal-lines-scroll",
                                                    children: logs.map((log, index)=>{
                                                        let color = '#39FF14';
                                                        if (log.type === 'system') color = '#0284C7';
                                                        if (log.type === 'success') color = '#10B981';
                                                        if (log.type === 'warn') color = '#D97706';
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color,
                                                                marginBottom: '6px',
                                                                fontFamily: 'var(--font-heading-mono)'
                                                            },
                                                            children: log.text
                                                        }, index, false, {
                                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                                            lineNumber: 921,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 910,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                            lineNumber: 874,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                    lineNumber: 820,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /* 3. Non-Cart Screens: Show Terminal console normally */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flexGrow: 1,
                                        border: '2px solid var(--color-text-primary)',
                                        backgroundColor: '#0F0F13',
                                        color: '#39FF14',
                                        borderRadius: 'var(--radius-sm)',
                                        boxShadow: '8px 8px 0px var(--color-text-primary)',
                                        fontFamily: 'var(--font-heading-mono)',
                                        fontSize: '0.8rem',
                                        lineHeight: 1.5,
                                        padding: 'var(--space-4)',
                                        overflowY: 'auto',
                                        minHeight: '320px',
                                        maxHeight: '600px',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    },
                                    className: "terminal-console-panel",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderBottom: '1.5px solid #222',
                                                paddingBottom: '8px',
                                                marginBottom: '12px',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                fontSize: '0.7rem',
                                                color: '#6E6E7A'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "OPERATIONAL INTEGRATION RELAYS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 964,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'var(--color-accent)'
                                                    },
                                                    children: "● INGEST ACTIVE"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 965,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                            lineNumber: 952,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: terminalScrollRef,
                                            style: {
                                                flexGrow: 1,
                                                overflowY: 'auto'
                                            },
                                            className: "terminal-lines-scroll",
                                            children: logs.map((log, index)=>{
                                                let color = '#39FF14';
                                                if (log.type === 'system') color = '#0284C7';
                                                if (log.type === 'success') color = '#10B981';
                                                if (log.type === 'warn') color = '#D97706';
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color,
                                                        marginBottom: '6px',
                                                        fontFamily: 'var(--font-heading-mono)'
                                                    },
                                                    children: log.text
                                                }, index, false, {
                                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                                    lineNumber: 979,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/DemoMenu.jsx",
                                            lineNumber: 968,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/DemoMenu.jsx",
                                    lineNumber: 932,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/DemoMenu.jsx",
                                lineNumber: 747,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/DemoMenu.jsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/DemoMenu.jsx",
                lineNumber: 256,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .menu-list-scroll::-webkit-scrollbar,
        .terminal-lines-scroll::-webkit-scrollbar,
        .whatsapp-bubbles-container::-webkit-scrollbar {
          width: 4px;
        }
        .menu-list-scroll::-webkit-scrollbar-thumb,
        .terminal-lines-scroll::-webkit-scrollbar-thumb,
        .whatsapp-bubbles-container::-webkit-scrollbar-thumb {
          background-color: var(--color-border);
          border-radius: 2px;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes radar-sweep {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .radar-sweep {
          animation: radar-sweep 4s linear infinite;
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        .live-indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #39FF14;
          display: inline-block;
          box-shadow: 0 0 8px #39FF14;
          animation: blink 1s ease-in-out infinite alternate;
        }
        @keyframes blink {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/DemoMenu.jsx",
                lineNumber: 992,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/DemoMenu.jsx",
        lineNumber: 244,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DemoMenu, "5EDL3gXYEso490htOvAnDx5zO0w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c = DemoMenu;
var _c;
__turbopack_context__.k.register(_c, "DemoMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/PhilosophySection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhilosophySection",
    ()=>PhilosophySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useReveal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PhilosophySection = ()=>{
    _s();
    const [revealRef, isVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])(0.1);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const togglePlay = (e)=>{
        if (e) e.stopPropagation();
        const video = videoRef.current;
        if (!video) return;
        if (isPlaying) {
            video.pause();
            setIsPlaying(false);
        } else {
            if (video.ended) {
                video.currentTime = 0;
            }
            video.play().then(()=>setIsPlaying(true)).catch((err)=>console.log("Playback failed:", err));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "philosophy-section",
        ref: revealRef,
        className: `reveal ${isVisible ? 'visible' : ''}`,
        style: {
            paddingTop: 'calc(var(--space-8) * 1.5)',
            paddingBottom: 'calc(var(--space-8) * 1.5)',
            borderBottom: '1px solid var(--color-border)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            textAlign: 'left'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-tag",
                                style: {
                                    marginBottom: 'var(--space-3)'
                                },
                                children: "Core Philosophy"
                            }, void 0, false, {
                                fileName: "[project]/app/components/PhilosophySection.jsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 'var(--font-size-h2)',
                                    lineHeight: 1.25,
                                    letterSpacing: '-0.03em',
                                    marginBottom: 'var(--space-4)',
                                    color: 'var(--color-text-primary)'
                                },
                                children: [
                                    "Automation isn't about",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "editorial-serif",
                                        style: {
                                            color: 'var(--color-accent)',
                                            fontFamily: 'var(--font-heading-serif)'
                                        },
                                        children: "replacing people"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PhilosophySection.jsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "; it's about",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "editorial-serif",
                                        style: {
                                            color: 'var(--color-accent)',
                                            fontFamily: 'var(--font-heading-serif)'
                                        },
                                        children: "freeing time"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PhilosophySection.jsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    "for more productive tasks."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PhilosophySection.jsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '64px',
                                    height: '2px',
                                    backgroundColor: 'var(--color-accent)',
                                    marginBottom: 'var(--space-4)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/PhilosophySection.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/PhilosophySection.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            margin: '0 auto'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-premium",
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 0,
                                overflow: 'hidden',
                                backgroundColor: 'var(--color-surface)',
                                borderColor: 'var(--color-text-primary)',
                                borderWidth: '2px',
                                boxShadow: '8px 8px 0px var(--color-text-primary)',
                                borderRadius: 'var(--radius-sm)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: 'var(--space-2) var(--space-3)',
                                        backgroundColor: 'var(--color-surface-subtle)',
                                        borderBottom: '2px solid var(--color-text-primary)',
                                        fontFamily: 'var(--font-heading-mono)',
                                        fontSize: 'var(--font-size-xs)',
                                        fontWeight: 700,
                                        color: 'var(--color-text-primary)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '4px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: '8px',
                                                            height: '8px',
                                                            borderRadius: '50%',
                                                            backgroundColor: 'var(--color-danger)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PhilosophySection.jsx",
                                                        lineNumber: 108,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: '8px',
                                                            height: '8px',
                                                            borderRadius: '50%',
                                                            backgroundColor: 'var(--color-warning)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PhilosophySection.jsx",
                                                        lineNumber: 109,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: '8px',
                                                            height: '8px',
                                                            borderRadius: '50%',
                                                            backgroundColor: 'var(--color-accent)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PhilosophySection.jsx",
                                                        lineNumber: 110,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/PhilosophySection.jsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "automation-philosophy.mp4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PhilosophySection.jsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/PhilosophySection.jsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PhilosophySection.jsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative',
                                        width: '100%',
                                        aspectRatio: '16 / 9',
                                        backgroundColor: '#000000',
                                        overflow: 'hidden',
                                        cursor: 'pointer'
                                    },
                                    onClick: togglePlay,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                            ref: videoRef,
                                            src: "/video-asset/automation-isn't-about-repressing-people.mp4",
                                            playsInline: true,
                                            onEnded: ()=>setIsPlaying(false),
                                            style: {
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/PhilosophySection.jsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent 60%)',
                                                pointerEvents: 'none',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                padding: 'var(--space-3)',
                                                zIndex: 2
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'flex-end',
                                                        pointerEvents: 'auto'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/PhilosophySection.jsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        pointerEvents: 'auto',
                                                        width: '100%'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: togglePlay,
                                                        style: {
                                                            backgroundColor: 'rgba(7, 7, 9, 0.75)',
                                                            border: '1.5px solid var(--color-text-primary)',
                                                            borderRadius: '0px',
                                                            width: '36px',
                                                            height: '36px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: '#FFFFFF',
                                                            cursor: 'pointer',
                                                            transition: 'transform var(--transition-fast)'
                                                        },
                                                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                            size: 16,
                                                            fill: "#FFFFFF"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/PhilosophySection.jsx",
                                                            lineNumber: 183,
                                                            columnNumber: 36
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                            size: 16,
                                                            fill: "#FFFFFF",
                                                            style: {
                                                                marginLeft: '2px'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/PhilosophySection.jsx",
                                                            lineNumber: 183,
                                                            columnNumber: 73
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PhilosophySection.jsx",
                                                        lineNumber: 167,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/PhilosophySection.jsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/PhilosophySection.jsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/PhilosophySection.jsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PhilosophySection.jsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/PhilosophySection.jsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PhilosophySection.jsx",
                lineNumber: 44,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/PhilosophySection.jsx",
            lineNumber: 43,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/PhilosophySection.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PhilosophySection, "sjVl+xp60N5iF/x1JSlSgfNxRXw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c = PhilosophySection;
var _c;
__turbopack_context__.k.register(_c, "PhilosophySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            backgroundColor: 'var(--color-surface)',
            borderTop: '1px solid var(--color-border)',
            paddingBlock: 'var(--space-6)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-secondary)',
            position: 'relative',
            zIndex: 5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: 'var(--space-5)',
                            marginBottom: 'var(--space-6)'
                        },
                        className: "footer-grid-chassis",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 'var(--space-3)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#hero",
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '4px',
                                            color: 'var(--color-text-primary)',
                                            textDecoration: 'none'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: 'LogoFont',
                                                fontSize: '2.6rem',
                                                lineHeight: 1,
                                                fontWeight: 'normal',
                                                color: 'var(--color-text-primary)',
                                                letterSpacing: '-0.02em',
                                                textTransform: 'none'
                                            },
                                            children: "flowify.agency"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Footer.jsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '0.8rem',
                                            lineHeight: 1.6
                                        },
                                        children: "Flowify engineers high-efficiency operational software, Tally ERP integrations, WhatsApp automations, and brand-amplification platforms for Indian businesses. We replace manual bottlenecks with persistent, self-healing code."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 'var(--space-3)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '0.85rem',
                                            fontWeight: 800,
                                            color: 'var(--color-text-primary)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        },
                                        children: "Engine Classes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            listStyle: 'none',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '8px',
                                            fontSize: '0.8rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#engines",
                                                    className: "ft-lnk",
                                                    children: "1. Attract"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.jsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#engines",
                                                    className: "ft-lnk",
                                                    children: "2. Convert"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.jsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#engines",
                                                    className: "ft-lnk",
                                                    children: "3. Deliver"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.jsx",
                                                    lineNumber: 67,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#engines",
                                                    className: "ft-lnk",
                                                    children: "4. Retain"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.jsx",
                                                    lineNumber: 68,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 68,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 'var(--space-3)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '0.85rem',
                                            fontWeight: 800,
                                            color: 'var(--color-text-primary)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        },
                                        children: "Integration Relays"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            listStyle: 'none',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '8px',
                                            fontSize: '0.8rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Tally ERP API Connect"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "WhatsApp Business Cloud API"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Zoho Flow & Zoho CRM Relay"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Razorpay POS Webhooks"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "IndiaMART & Justdial Ingest"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 'var(--space-3)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '0.85rem',
                                            fontWeight: 800,
                                            color: 'var(--color-text-primary)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        },
                                        children: "Systems Chassis"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '0.8rem',
                                            lineHeight: 1.6
                                        },
                                        children: [
                                            "Flowify Agency India Ltd.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 92,
                                                columnNumber: 40
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Tier-1 Systems Dev Center: Pune / Delhi / Surat",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 93,
                                                columnNumber: 62
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'var(--font-heading-mono)',
                                                    fontSize: '0.7rem',
                                                    color: 'var(--color-accent)'
                                                },
                                                children: "NODE: BLR_ACTIVE_09"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderTop: '1px solid var(--color-border)',
                            paddingTop: 'var(--space-4)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 'var(--space-3)',
                            fontFamily: 'var(--font-heading-mono)',
                            fontSize: '0.65rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "© ",
                                    currentYear,
                                    " FLOWIFY AGENCY // ALL PIPELINES PROTECTED."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '16px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "GSTIN: 27AAFCN8012E1ZS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "SECURERelay: active"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.jsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Footer.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .ft-lnk {
          transition: color var(--transition-fast);
        }
        .ft-lnk:hover {
          color: var(--color-text-primary) !important;
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Footer.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/AuditDialog.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuditDialog",
    ()=>AuditDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const AuditDialog = ({ isOpen, onClose, computedLeak, onSubmitAudit })=>{
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [company, setCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [bottleneck, setBottleneck] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    if (!isOpen) return null;
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmitAudit(name, email, company, bottleneck);
        // Reset Form
        setName('');
        setEmail('');
        setCompany('');
        setBottleneck('');
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        onClick: onClose,
        style: {
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(7, 7, 9, 0.8)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: 'var(--space-4)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                open: true,
                onClick: (e)=>e.stopPropagation(),
                style: {
                    border: '2px solid var(--color-text-primary)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text-primary)',
                    padding: 'var(--space-5)',
                    maxWidth: '500px',
                    width: '100%',
                    boxShadow: '0 20px 48px rgba(0, 0, 0, 0.5)',
                    margin: 'auto',
                    display: 'block',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 'var(--space-4)',
                            borderBottom: '1px solid var(--color-border)',
                            paddingBottom: '12px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.1rem',
                                    fontWeight: 800
                                },
                                children: "GET YOUR FREE OPERATIONS ROADMAP"
                            }, void 0, false, {
                                fileName: "[project]/app/components/AuditDialog.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                "aria-label": "Close dialog",
                                style: {
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-text-primary)',
                                    width: '28px',
                                    height: '28px',
                                    border: '1px solid var(--color-border)',
                                    backgroundColor: 'var(--color-bg)'
                                },
                                className: "modal-close-btn",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AuditDialog.jsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/AuditDialog.jsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AuditDialog.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-3)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.8rem',
                                    color: 'var(--color-text-secondary)',
                                    lineHeight: 1.5,
                                    marginBottom: '8px'
                                },
                                children: [
                                    "Fill in your details below to get a customized roadmap showing you exactly how to automate your operations. Plug your annual profit leak (computed at",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 800,
                                            fontFamily: 'var(--font-heading-mono)',
                                            color: 'var(--color-danger)',
                                            textDecoration: 'underline'
                                        },
                                        children: computedLeak || '₹0/yr'
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AuditDialog.jsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ") and scale your business without daily headaches."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AuditDialog.jsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "lead-name",
                                        style: {
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: 'var(--font-size-xs)',
                                            fontWeight: 800,
                                            color: 'var(--color-text-secondary)'
                                        },
                                        children: "Your Name *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AuditDialog.jsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "lead-name",
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        required: true,
                                        placeholder: "Priya Patel",
                                        style: {
                                            backgroundColor: 'var(--color-bg)',
                                            border: '1px solid var(--color-border)',
                                            padding: '10px',
                                            color: 'var(--color-text-primary)',
                                            borderRadius: 'var(--radius-sm)',
                                            outline: 'none',
                                            fontSize: '0.85rem'
                                        },
                                        className: "modal-input"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AuditDialog.jsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AuditDialog.jsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "lead-email",
                                        style: {
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: 'var(--font-size-xs)',
                                            fontWeight: 800,
                                            color: 'var(--color-text-secondary)'
                                        },
                                        children: "Your Email *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AuditDialog.jsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        id: "lead-email",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        required: true,
                                        placeholder: "priya@yourcompany.in",
                                        style: {
                                            backgroundColor: 'var(--color-bg)',
                                            border: '1px solid var(--color-border)',
                                            padding: '10px',
                                            color: 'var(--color-text-primary)',
                                            borderRadius: 'var(--radius-sm)',
                                            outline: 'none',
                                            fontSize: '0.85rem'
                                        },
                                        className: "modal-input"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AuditDialog.jsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AuditDialog.jsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "lead-company",
                                        style: {
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: 'var(--font-size-xs)',
                                            fontWeight: 800,
                                            color: 'var(--color-text-secondary)'
                                        },
                                        children: "Company Name"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AuditDialog.jsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "lead-company",
                                        value: company,
                                        onChange: (e)=>setCompany(e.target.value),
                                        placeholder: "Sharma Diagnostics or Raj Traders",
                                        style: {
                                            backgroundColor: 'var(--color-bg)',
                                            border: '1px solid var(--color-border)',
                                            padding: '10px',
                                            color: 'var(--color-text-primary)',
                                            borderRadius: 'var(--radius-sm)',
                                            outline: 'none',
                                            fontSize: '0.85rem'
                                        },
                                        className: "modal-input"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AuditDialog.jsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AuditDialog.jsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "lead-msg",
                                        style: {
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: 'var(--font-size-xs)',
                                            fontWeight: 800,
                                            color: 'var(--color-text-secondary)'
                                        },
                                        children: "What is your biggest daily operations headache?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AuditDialog.jsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "lead-msg",
                                        value: bottleneck,
                                        onChange: (e)=>setBottleneck(e.target.value),
                                        placeholder: "e.g., We waste hours manually copy-pasting leads or re-keying Tally bills...",
                                        style: {
                                            backgroundColor: 'var(--color-bg)',
                                            border: '1px solid var(--color-border)',
                                            padding: '10px',
                                            color: 'var(--color-text-primary)',
                                            borderRadius: 'var(--radius-sm)',
                                            minHeight: '110px',
                                            resize: 'vertical',
                                            outline: 'none',
                                            fontSize: '0.85rem'
                                        },
                                        className: "modal-input"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AuditDialog.jsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AuditDialog.jsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 'var(--space-4)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "btn-core btn-pixel-brutal",
                                    style: {
                                        width: '100%',
                                        paddingBlock: '12px',
                                        fontSize: 'var(--font-size-sm)',
                                        fontWeight: 800
                                    },
                                    children: "Get Free Roadmap →"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AuditDialog.jsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/AuditDialog.jsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AuditDialog.jsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AuditDialog.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .modal-close-btn:hover {
          border-color: var(--color-text-primary) !important;
        }
        .modal-input:focus {
          border-color: var(--color-accent) !important;
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/AuditDialog.jsx",
                lineNumber: 216,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AuditDialog.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuditDialog, "mGzokX1n+2h4CtmR9NKp47cjGvQ=");
_c = AuditDialog;
var _c;
__turbopack_context__.k.register(_c, "AuditDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$WorkflowSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/WorkflowSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Services$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Services.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DemoMenu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/DemoMenu.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PhilosophySection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/PhilosophySection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuditDialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AuditDialog.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [isAuditOpen, setIsAuditOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [computedLeak, setComputedLeak] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('₹5,40,000/yr');
    const handleOpenAudit = (leakVal)=>{
        if (leakVal && typeof leakVal === 'string') {
            setComputedLeak(leakVal);
        }
        setIsAuditOpen(true);
    };
    const handleCloseAudit = ()=>{
        setIsAuditOpen(false);
    };
    // Submit Lead Form
    const handleSubmitAuditForm = (name, email, company, bottleneck)=>{
        alert(`DIAGNOSTIC LEAK REPORT LOGGED\n` + `---------------------------------------\n` + `Org Contact: ${name}\n` + `Organization: ${company || 'Unspecified Corp'}\n` + `Business Node: ${email}\n` + `Flagged Annual Leak: ${computedLeak}\n\n` + `Worst Bottleneck: "${bottleneck}"\n\n` + `STATUS: SUCCESSFULLY INGESTED. Our systems operations team will compile your customized operational repair blueprint and follow up within 12 hours.`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflowX: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                onOpenAudit: ()=>handleOpenAudit()
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    flexGrow: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {
                        onOpenAudit: ()=>handleOpenAudit()
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$WorkflowSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkflowSection"], {}, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Services$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Services"], {}, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DemoMenu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DemoMenu"], {}, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PhilosophySection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhilosophySection"], {}, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuditDialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuditDialog"], {
                isOpen: isAuditOpen,
                onClose: handleCloseAudit,
                computedLeak: computedLeak,
                onSubmitAudit: handleSubmitAuditForm
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(Home, "YxsjYiupi3HMyMtJH47cA1I5r+c=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_0mxw9jk._.js.map