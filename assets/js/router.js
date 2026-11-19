/**
 * ATLAS 9 - ROUTER & VIEW ENGINE
 * Hash-based Single Page Application Router
 * Zero dependencies, pure JavaScript offline execution.
 */

(function(window) {
    'use strict';

    const routes = {};

    const AtlasRouter = {
        register: function(route, handler) {
            routes[route] = handler;
        },

        navigate: function(hash) {
            window.location.hash = hash;
        },

        init: function() {
            window.addEventListener('hashchange', () => this.handleRoute());
            this.handleRoute();
        },

        handleRoute: function() {
            let hash = window.location.hash.slice(1) || '/';
            // Parse parameters, e.g. /lesson/his_b1
            let [path, queryString] = hash.split('?');
            let matched = false;

            // Direct route match
            if (routes[path]) {
                routes[path](this.parseQueryParams(queryString));
                matched = true;
            } else {
                // Parameterized routes (e.g. /lesson/:id)
                for (let r in routes) {
                    if (r.includes('/:')) {
                        const rParts = r.split('/');
                        const pParts = path.split('/');
                        if (rParts.length === pParts.length) {
                            let match = true;
                            let params = {};
                            for (let i = 0; i < rParts.length; i++) {
                                if (rParts[i].startsWith(':')) {
                                    params[rParts[i].slice(1)] = decodeURIComponent(pParts[i]);
                                } else if (rParts[i] !== pParts[i]) {
                                    match = false;
                                    break;
                                }
                            }
                            if (match) {
                                routes[r](params, this.parseQueryParams(queryString));
                                matched = true;
                                break;
                            }
                        }
                    }
                }
            }

            if (!matched) {
                // Default to home
                if (routes['/']) routes['/']();
            }

            // Update active navigation item in sidebar
            this.updateActiveNav(path);

            // Close mobile sidebar on route change
            const sidebar = document.querySelector('.app-sidebar');
            const backdrop = document.querySelector('.sidebar-backdrop');
            if (sidebar) sidebar.classList.remove('open');
            if (backdrop) backdrop.classList.remove('active');

            // Scroll top
            window.scrollTo(0, 0);
        },

        parseQueryParams: function(queryString) {
            const params = {};
            if (!queryString) return params;
            const pairs = queryString.split('&');
            for (let pair of pairs) {
                const [k, v] = pair.split('=');
                if (k) params[decodeURIComponent(k)] = decodeURIComponent(v || '');
            }
            return params;
        },

        updateActiveNav: function(path) {
            const navLinks = document.querySelectorAll('.nav-item');
            navLinks.forEach(link => {
                const href = link.getAttribute('href') || '';
                const linkPath = href.replace('#', '').split('?')[0];
                if (linkPath === path || (path.startsWith(linkPath) && linkPath !== '/')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    };

    window.AtlasRouter = AtlasRouter;

})(window);
