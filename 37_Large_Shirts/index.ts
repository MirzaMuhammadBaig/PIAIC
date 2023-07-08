function make_shirt(size: string = "Large", message: string = "I love Metaverse") {
    console.log(`A ${size} T-shirt will be printed with the message: "${message}".`);
  }
  
  make_shirt();
  make_shirt("Medium");
  make_shirt("Small", "I love Blockchain");
  