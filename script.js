console.log('Hello!');

  
document.addEventListener('DOMContentLoaded', function () {
  const calendarContainer = document.querySelector('.calendar');

  // Järjekorra loomine suvaliste numbritega (1-24)
  const suffledNumbers = document.querySelector('.numbrid');
  const shuffledNumbers = Array.from({ length: 24 }, (_, index) => index + 1).sort(() => Math.random() - 0.5);

  // Iga numbri jaoks lisatakse kalendrisse div koos pildi elemendiga
  shuffledNumbers.forEach((number) => {
    const calendarDay = document.createElement('div');
    calendarDay.innerText = number;

    const imagelinks = [
      'https://img.freepik.com/free-vector/feliz-navidad-lettering-with-shining-confetti-bright-baubles_1262-16808.jpg',
      'https://cdn.thewirecutter.com/wp-content/media/2022/11/decoratechristmastree-2048px-iStock-1281771707-2x1-1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/WildRat.jpg',
      'https://i1.wp.com/moneynation.com/wp-content/uploads/2016/09/Christmas-Money.jpg',
      'https://media.istockphoto.com/id/497277722/photo/hot-chocolate-with-melted-snowman.jpg?s=1024x1024&w=is&k=20&c=kalF5dP9HjkfNmSIsvhASrLoWvDCs7JXgYqRKNZ9mz8=',
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:eco,dpr_2.0/rockcms/2022-12/christmas-jokes-for-kids-cb0122.jpg',
      'https://eestielu.goodnews.ee/wp-content/uploads/sites/2/2014/11/Foto_Sergei-Zjuganov1.jpg',
      'https://images.1a.ee/display/onea_ee/uploads/ca/acc905a3/8b864c88.jpg',
      'https://images.delfi.ee/media-api-image-cropper/v1/50714f30-b8fa-11eb-a43e-c39d2a6aaf33.jpg',
      'https://keskkonnaportaal.ee/sites/default/files/2021-12/ilm%20ja%20kliima/winter-5892335_1920.jpg',
      'https://pealinn.ee/wp-content/uploads/2021/03/304001.jpg',
      'https://f9.pmo.ee/SwfjQShjxnkhk7uJpWN2ZmyqzRk=/1864x0/nginx/o/2022/12/18/15034299t1he593.jpg',
      'https://www.hobukeskus.ee/wp-content/uploads/2015/02/Jouluhobune.jpg',
      'https://minasiinolen.files.wordpress.com/2017/12/f16bb2a384501c9ceedb7dfe1f5105a8-christmas-kitten-christmas-animals.jpg',
      'https://2.bp.blogspot.com/-Ovx4YyiXQ34/Vn58Q1PmvFI/AAAAAAAAEoI/b2shp39zlyo/s1600/_DSC5398v.png',
      'https://www.blackboxcages.com/cdn/shop/articles/AdobeStock_578742771_1728x.jpg',
      'https://cdn.pistik.net/ekaart/static/kaardid/suur/joulud-2020-04.jpg',
      'https://mindovermunch.com/wp-content/uploads/2022/12/Starbucks-Peppermint-Hot-Chocolate-2.jpg',
      'https://media2.fdncms.com/stranger/imager/u/large/54459559/1608747985-rats.jpg',
      'https://live.staticflickr.com/65535/49931220078_634fd28fa2_b.jpg',
      'https://ih1.redbubble.net/image.1891542539.2550/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfbum6islGkLibeupr00zJ-8RVU8oCWg_Kw&usqp=CAU',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db8af897-236d-4c27-ae15-080001e5590d/dlvf62-605a9c45-576b-4646-b1e1-dbc0f3fe3f06.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiOGFmODk3LTIzNmQtNGMyNy1hZTE1LTA4MDAwMWU1NTkwZFwvZGx2ZjYyLTYwNWE5YzQ1LTU3NmItNDY0Ni1iMWUxLWRiYzBmM2ZlM2YwNi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.O1x_VMQaqiaPt_lXKHyZafMgzw8H8rsOS7HLJGgoiuo',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zjRkMkqrnUz7cTh33YORSOn_Q3Zp1TsyAQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyFTULuc_10SLoAVKxfHufhaRjIJvBe54iA&usqp=CAU',
      'https://hips.hearstapps.com/hmg-prod/images/gingerbread-truffles-index-655bc6ddce4ef.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8YaOHUIx_lSBlWB-QwTkJZTzKuPteL8qZIw&usqp=CAU',
      'https://asda.scene7.com/is/image/Asda/5057172607440?hei=748&wid=556&qlt=85&fmt=pjpg&resmode=sharp2&op_usm=1.1,0.5,0,0&defaultimage=default_details_George_rd', 'https://images.unsplash.com/photo-1609260057679-1b9f08ea0dc5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNocmlzdG1hcyUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D'
    ];



    const image = document.createElement('img');
    image.src = imagelinks[number - 1];  // Asenda see oma pildi tee ja failinimega

    calendarDay.addEventListener('click', function () {
      // Muuda pildi kuvamine, kui kasutaja klõpsab numbri peal
      calendarDay.innerHTML = '';
      calendarDay.appendChild(image);
    });

    calendarContainer.appendChild(calendarDay);
  });
});