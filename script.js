const $frame = document.getElementById('frame');
const imgAddresses = [
    { address: 'images/img1.jpg', title:'Mountain' },
    { address: 'images/img2.jpg', title:'snow cave' },
    { address: 'images/img3.jpg', title:'car' },
    { address: 'images/img4.jpg', title:'animal' },
    { address: 'images/img5.jpg', title:'room' },
    { address: 'images/img6.jpg', title:'Rabbit' }
];

imgAddresses.forEach(imgAddress =>{
    const card = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardFooter = document.createElement('div');
    const divClassLists = [
        { name: card, classes: ['card'] },
        { name: cardBody, classes: ['card-body', 'col'] },
        { name: cardFooter, classes: ['card-footer', 'text-center', 'text-break'] }
    ];
    const img = document.createElement('img');
    const imgClassLists = [ { name: img, classes: ['img-fluid'] } ];
    const title = document.createElement('p');
    const compositions = [ 
        { frame: cardBody, body: img },
        { frame: cardFooter, body: title },
        { frame: card, body: cardBody },
        { frame: card, body: cardFooter }
    ];

    divClassLists.forEach(divClassList =>{
        divClassList.name.classList.add(...divClassList.classes);
    });
    
    imgClassLists.forEach(imgClassList =>{
        imgClassList.name.classList.add(...imgClassList.classes);
    });
    
    compositions.forEach(composition =>{
        composition.frame.appendChild(composition.body);
    });

    img.setAttribute('src', imgAddress.address);
    title.innerText = imgAddress.title;
    $frame.appendChild(card);
});