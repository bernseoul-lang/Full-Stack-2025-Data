/**
 * 실습 1
 * 
 * 원격지 JSON서버에서 JSON 데이터 획득
 * 
 */
fetch('https://jsonplaceholder.typicode.com/todos')//할일목록 JSON
    .then(response => response.json())
    .then(json=>{
        // console.log(json);

        //1. 모든 id를 추출하여 출력
        //2. completed가 true 인 객체들의 개수 출력
        const ids = json.map(item=>item.id);
        console.log(ids);

        const completedCount = json.filter(item=> item.completed).length;
        console.log(completedCount);
    })

        // let cnt2 = 0;
        // json.forEach(obj => {
        //     const {id,completed}
        // })
// 실습 2
//모든 사용자 정보를 아래 형식으로 출력 

//[1번]
//Bret(Leanne Graham, Sincere@april.biz, 1-770-736-8031 x56442)
//주소: Kulas Light Apt. 556 Gwenborough(92998-3874)[-37.3159, 81.1496]
//웹사이트: hildegard.org
//회사: Romaguera-Crona, harness real-time e-markets

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
    //     console.log(json[0]);

    //     const user = json[0];

    //     console.log(`${user.username}(${user.name}, ${user.email}, ${user.phone})`);

    //     console.log(`주소: ${user.address.street} ${user.address.suite} ${user.address.city} (${user.address.zipcode}) [${user.address.geo.lat}, ${user.address.geo.lng}]`);

    //     console.log(`웹사이트: ${user.website}`);

    //     console.log(`회사: ${user.company.name}, ${user.company.catchPhrase}`);
    // });

//code hier
    for(obj of json){
        const {
            id, name, username, email,
            address: {street,suite,city,zipcode,geo:{lat,lng}},
            phone,website,
            company:{name:companyName, bs}
        } = obj;

        console.log(`***************************************************`);
        console.log(`[${id}번]`);
        console.log(`${username}(${name},${email},${phone})`);
        console.log(`주소: ${street} ${suite} ${city} (${zipcode}) [${lat},${lng}]`);
        console.log(`웹사이트: ${website}`);
        console.log(`회사: ${companyName},${bs}`);
        console.log(`***************************************************`);
    }
})