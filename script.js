// const token = ""// Enter your hugging face token ;
const inptxt = document.getElementById("input");
const image = document.getElementById("image");
const button = document.getElementById("dtn");

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/susanth73825/myepxwithai", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    return result;
}
button.addEventListener('click', async function() {
    const inputValue = inptxt.value;
    query({"inputs": inputValue}).then((response) => {
        const objectURL = URL.createObjectURL(response);
        image.src = objectURL;
    });
});
