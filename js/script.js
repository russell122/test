


window.addEventListener('DOMContentLoaded', () => {

    function init() {

        getResource('js/db.json')
            .then(data => createCards(data))
            .catch(err => console.error(err))

        document.querySelector('button').removeEventListener('click', init);
        document.querySelector('button').remove(); // this.remove();
    }

    async function getResource(url) {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Bla bla ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    function createCards(data) {

        data.people.forEach(item => {
            console.log(item)
            let card = document.createElement('div');
            card.classList.add('card');

            let icon;
            if (item.sex === 'male') {
                icon = "icons/mars.png";
            } else {
                icon = "icons/female.png";
            }

            card.innerHTML = `
		    <img src= "${item.photo}" alt=${item.name}>
		    <div class="name">${item.name} ${item.surname}</div>
		    <div class="age">${item.age}</div>
		`;
            document.querySelector('.app').append(card);
        })
    }

    let btn = document.querySelector('button');

    if (btn) {
        btn.addEventListener('click', init)
    }

})