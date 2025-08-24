    const button = document.querySelector(".upload_button"),
    text = document.querySelector(".text");

    button.addEventListener("click", ()=>{
      button.classList.add("progress");
      text.innerText = "Uploading...";

      setTimeout(()=>{
       button.classList.remove("progress"); //remove progress after 6s
       text.innerText = "Uploaded";
      },6000); //1000ms = 1s (6000 = 6s)

    });