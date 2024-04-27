const BASE_URL = "https://openlibrary.org/people/mekBot/books";
const BASE_URL_IMG = "https://covers.openlibrary.org/b/olid";

const cardBody = document.querySelector('.card-body');

const fetchData = async () => {
    try {
        const res = await fetch(`${BASE_URL}/currently-reading.json`);
        if(!res.ok) throw new Error(`Could not fetch data from ${BASE_URL}`);
        return res.json();
        
    } catch (error) {
        console.error(error.message);
    }
};

 const creatCard = () => {
    fetchData().then((books) => {
        const bookList = books.reading_log_entries.slice(0,6);
        bookList.forEach((book) => {
            const data = book.work;
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            card.innerHTML = `
             <img src="${BASE_URL_IMG}/${data.cover_edition_key}.jpg" alt="#">
                        <h5>${data.title.slice(0, 25)}</h5>
                        <p>${data.author_names[0]} <br> ${
              data.first_publish_year
            } </p>
                        <div class="f-btn mb-2 ">
                            <button type="submit" class="btn btn-warning" id="addBook">Bookmark</button>
                            <button type="submit" class="btn btn-info" id="moreInfo">More info</button>
                        </div>
                        <button type="submit" class="btn btn-secondary"> Read </button>                
            
            `;
            cardBody.appendChild(card);
        })
    })
 }
 creatCard()

 setTimeout(function() {
    const addbook = document.querySelectorAll("#addBook");
    const asideUl = document.getElementById("aside-ul");
    Array.from(addbook).map((item) => {
      item.addEventListener("click", (e) => {
        const asideLi = document.createElement("li");
        const asideDiv = document.createElement("div");
        asideDiv.setAttribute("class", "text");
        const asideDivh5 = document.createElement("h5");
        const asideDivp = document.createElement("p");
        asideLi.appendChild(asideDiv);
        asideDiv.appendChild(asideDivh5);
        asideDivh5.textContent =
          item.parentElement.parentElement.children[1].textContent;
        asideDiv.appendChild(asideDivp);
        asideDivp.textContent =
          item.parentElement.parentElement.children[2].textContent;
        asideUl.appendChild(asideLi);

        const asideDivRight = document.createElement("div");
        const asideDivIcon = document.createElement("i");
        asideDivIcon.setAttribute("class", "bi bi-book");
        const asideDivIcon2 = document.createElement("i");
        asideDivIcon2.setAttribute("class", "del bi bi-backspace");
        asideDivRight.appendChild(asideDivIcon);
        asideDivRight.appendChild(asideDivIcon2);
        asideLi.appendChild(asideDivRight);

        asideDivIcon2.addEventListener("click", (e) => {
          const asideDelete = asideDivIcon2.parentElement.parentElement;
          asideUl.removeChild(asideDelete);
        });
      });
    });
    const azamjon = document.querySelector(".azamjon");
    const moreInfo = document.querySelectorAll("#moreInfo");
    const container = document.querySelector(".container");
    const infoDelete = document.getElementById("info_delete");
    Array.from(moreInfo).map((item) => {
      item.addEventListener("click", (e) => {
        murodjon.setAttribute(
          "src",
          item.parentElement.parentElement.children[0].getAttribute("src")
        );
        container.setAttribute("style", "display:end;");
      });
      infoDelete.addEventListener("click", () => {
        container.setAttribute("style", "display:none");
      });
    });
 }, 2000);
