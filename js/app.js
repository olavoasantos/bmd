/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

/**
 * Core
 */
require('./bootstrapCore');

/**
 * Vue structure
 */
require('./bootstrapVue');

import spam from "./Core/Spam/Spam";
window.spam = new spam;