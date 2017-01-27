/**
 * Generates a random string
 *
 * @param   {int}       size    String size
 * @returns {string}
 */
window.str_random = (size = 6) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < size; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}