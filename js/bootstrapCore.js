import Helpers from "./Core/Helpers/main";

/**
 * Form
 * Manage forms in an object oriented fashion.
 */
import Form from "./Core/Form/main";
window.Form = Form;

/**
 * Alfred
 * Get data from back-end with an Eloquent-like
 * syntax.
 */
import Alfred from "./Core/Alfred/main";
window.Alfred = new Alfred;


/**
 * WYSIWYG Editor
 */
import Editor from "./Core/Editor/main";
window.Editor = Editor;
