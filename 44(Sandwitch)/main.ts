function makeSandwitch(...items: string[]) {
    console.log("your SandWitch contain these items")
    for (let i = 0; i < items.length; i++) {
        console.log(items[i])
    }
    console.log("Enjoy Your SandWitch")
}
makeSandwitch("bread", "butter", "cheese", "egg", "cucumber", "chicken", "ketchup")
makeSandwitch("bread", "salad", "egg")
makeSandwitch("bread", "butter", "chicken", "egg")