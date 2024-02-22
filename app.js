const menu=[
    {
    id:1,
    title:"Pomarańcze",
    category:"Owoce",
    price: "6 PLN za kg",
    img:"photo/orange2.png",
    desc:"Jedna pomarańcza dziennie powinna być spożywana przez osoby chorujące na nadciśnienie. Oprócz tego, właśnie jeden owoc pozwala na pokrycie dziennego zapotrzebowania na witaminę C. Pomarańcze ponadto wpływają pozytywnie na pracę nerek i pozwalają uniknąć wystąpienia kamieni nerkowych."
    },
    {
    id:2,
    title:"Gruszki",
    category:"Owoce",
    price: "7 PLN za kg",
    img:"photo/gruszka.png",
    desc:"Gruszki są źródłem wielu antyoksydantów, takich jak witamina C, witamina K i miedź. Antyoksydanty chronią komórki przed uszkodzeniem przez wolne rodniki i mogą pomóc zwalczać stany zapalne. Gruszki składają się głównie z wody, co czyni je doskonałym wyborem dla utrzymania nawodnienia."
    },
    {
    id:3,
    title:"Truskawki",
    category:"Owoce",
    price: "10 PLN za kg",
    img:"photo/truskawka.png",
    desc:"Truskawki są bogate w pektyny, błonnik i kwasy organiczne, które regulują trawienie i przyspieszają przemianę materii. Procesy te usprawnia także bromelina (enzym, który wspomaga metabolizm białek) oraz mangan (ułatwia trawienie tłuszczu, chroni przed wzdęciami i zaparciami)."
    },
    {
    id:4,
    title:"Winogrono",
    category:"Owoce",
    price: "12 PLN za kg",
    img:"photo/winogrono.png",
    desc:"Winogrona lekko przeczyszczają, odtruwają i wzmacniają. Winogrona należą do nielicznych owoców zawierających jod - niezbędny dla funkcjonowania tarczycy. Jest w nich też wapń, fosfor, magnez i nieco witamin: beta-karoten, E, C oraz z grupy B. Są zasadotwórcze, pomagają w pozbyciu się nagromadzonych w organizmie kwasów."
    },

    {
    id:5,
    title:"Ogórki",
    category:"Warzywa",
    price: "4 PLN za kg",
    img:"photo/ogorek.png",
    desc:"Dzięki zawartości związków takich jak kukurbitacyna ogórki mogą pobudzać trawienie, wzmagać wydzielanie soku żołądkowego, trzustkowego i jelitowego oraz żółci. Działają również przeciwgrzybiczo, antybakteryjnie i przeciwzapalnie. Dzięki zawartości wody i błonnika ogórki mogą również łagodzić zaparcia."
    },
    {
    id:6,
    title:"Papryka",
    category:"Warzywa",
    price: "15 PLN za kg",
    img:"photo/papryka.png",
    desc:"Cechuje się ona bardzo wysoką zawartością witaminy C oraz karotenoidów (zwłaszcza beta-karotenu). Papryka jest również dobrym źródłem kwasu foliowego, witamin (A, E i K), składników mineralnych (w szczególności potasu, manganu, żelaza i magnezu), błonnika pokarmowego oraz flawonoidów i kwasów fenolowych."
    },

    {
    id:7,
    title:"Szpinak",
    category:"Warzywa",
    price: "10 PLN za kg",
    img:"photo/szpinak.png",
    desc:"Ma własności uspokajające oraz zapobiega bólom głowy (w tym bólom migrenowym). Jedzenie szpinaku zaleca się też dzieciom i kobietom w ciąży oraz osobom cierpiącym na anemię. Szpinak jest bogatym źródłem żelaza i kwasu foliowego – jeśli chodzi o żelazo, to szpinak ma go taką samą ilość jak wołowina."
    },

    {
    id:8,
    title:"Sok jagodowy",
    category:"Soki",
    price: "6 PLN butelka 0,3L",
    img:"photo/sok_jagodowy.png",
    desc:"Jagodowy sok jest polecany w przypadku wystąpienia biegunek oraz zatruć pokarmowych. Ma także działanie moczopędnie oraz wspierające usuwanie toksyn z organizmu. Sok z jagód ma również działanie przeciwutleniające, wspiera walkę organizmu z wolnymi rodnikami, działa przeciwstarzeniowo oraz antynowotworowo."
    },
    {
    id:9,
    title:"Sok pomarańczowy",
    category:"Soki",
    price: "5 PLN butelka 0,5 L",
    img:"photo/sok.png",
    desc:"Szerokie i bogate właściwości pomarańczy sprawiają, że wypijanie dziennie jednej szklanki soku wyciśniętego z tych owoców powoduje wzmocnienie układu odpornościowego, odstresowuje, poprawia pracę mózgu, pamięć i koncentrację, wspiera prawidłowe funkcjonowanie układu pokarmowego oraz korzystnie wpływ na wzrok."
    }
   
    ];


    const sectionCenter=document.querySelector
    (".section-center");
    const filterBtns=document.querySelectorAll(".filter-btn");

    //funkcja wyświetla wszystkie produkty
    window.addEventListener("DOMContentLoaded",function(){
       //tu tylko wywołanie funkcji displayManuItems
        displayManuItems(menu);
    });
    
    //fukcja filtruje produkty po click btn
    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            //dataset.id wskazuje w jaki button kliknelismy
            const category=e.currentTarget.dataset.id;
            const menuCategory=menu.filter(function(menuItem){
                //console.log(manuItem.category);//wyświetla produkty tab na podstawie btn
                if(menuItem.category===category){
                    return menuItem;
                }
            });
            if(category==="All"){displayManuItems(menu);
            }//jeśli click All wyświetl wszystko
            else{
                displayManuItems(menuCategory);
            }
        });
    });
    
    //fukcja z html +join
     function displayManuItems(menuItems){
        let displayMenu=menuItems.map(function (item){
            //uwaga zamiast "" stosujemy ` ` 
             return ` 
             <article class="menu-item">
             <img src=${item.img}  class="photo" 
             alt=${item.title}>
             <div class="item-info">
             <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
                 <p class="item-text">
                 ${item.desc} 
                 </p>
             </div>
         </article> `; 
    });


    displayMenu=displayMenu.join("");
    sectionCenter.innerHTML=displayMenu;
     };




    