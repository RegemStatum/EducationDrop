const markers = document.querySelectorAll(".markers>div")
const reviewText = document.querySelector("#review-text")

const reviewInnerHTMLs = [
        "    <p>\"Before Coursecity, I was working two minimum wage jobs. Now,\n" +
        "    <span>& new life!\"I learned most of my programming skills and</span>\n" +
        "<span>through self-study and the material available0.</span></p>\n" +
        "<span class=\"review-span-name\">Stephanie Magion0</span>",

        "    <p>\"Before Coursecity, I was working two minimum wage jobs. Now,\n" +
        "    <span>& new life!\"I learned most of my programming skills and</span>\n" +
        "<span>through self-study and the material available1.</span></p>\n" +
        "<span class=\"review-span-name\">Stephanie Magion1</span>",

        "    <p>\"Before Coursecity, I was working two minimum wage jobs. Now,\n" +
        "    <span>& new life!\"I learned most of my programming skills and</span>\n" +
        "<span>through self-study and the material available2.</span></p>\n" +
        "<span class=\"review-span-name\">Stephanie Magion2</span>",

        "    <p>\"Before Coursecity, I was working two minimum wage jobs. Now,\n" +
        "    <span>& new life!\"I learned most of my programming skills and</span>\n" +
        "<span>through self-study and the material available3.</span></p>\n" +
        "<span class=\"review-span-name\">Stephanie Magion3</span>",

        "    <p>\"Before Coursecity, I was working two minimum wage jobs. Now,\n" +
        "    <span>& new life!\"I learned most of my programming skills and</span>\n" +
        "<span>through self-study and the material available4.</span></p>\n" +
        "<span class=\"review-span-name\">Stephanie Magion4</span>"
]


markers.forEach((marker)=> {
    marker.addEventListener("click", (e)=> {
        let index = Array.prototype.indexOf.call(markers, marker)
        markers.forEach((marker)=> {
            marker.classList.remove("highlighted")
        })
        marker.classList.add("highlighted")
        reviewText.classList.add("fade")
        setTimeout(()=>{
            reviewText.innerHTML = reviewInnerHTMLs[index]
            reviewText.classList.remove("fade")}, 400)
    })
})