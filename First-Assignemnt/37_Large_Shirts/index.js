function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Metaverse"; }
    console.log("A ".concat(size, " T-shirt will be printed with the message: \"").concat(message, "\"."));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love Blockchain");
