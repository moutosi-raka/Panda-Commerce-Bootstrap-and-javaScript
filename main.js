
/*২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। */ 

const h2Collection = document.getElementsByTagName('h2');
for(const h2 of h2Collection)
{
    h2.style.color = 'lightblue';
}

/* ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। */

const backpackSection = document.getElementById('backpack');
backpackSection.style.backgroundColor = 'tomato';
backpackSection.style.borderRadius = '5px';


/*৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা */ 
 const cards = document.getElementsByClassName('card');
 for(const card of cards)
 {
    card.style.borderRadius = '15px';
 }

/*৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো */ 


/*৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। */

const btns = document.querySelectorAll('.buy');
for(const btn of btns)
{
    btn.addEventListener('click', ()=>{
        btn.disabled = true;
    })
}


/*৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। */ 
const email = document.getElementById('exampleInputEmail1');
email.addEventListener('keyup', (event)=>{
    const text = event.target.value;
    const submit = document.querySelector('button[type = "submit"]');
    if(text === 'email')
    {
        submit.removeAttribute('disabled');
    }

    else
    {
        submit.setAttribute('disabled', true);
    }
})


/*৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। */ 

//watch
const watch = document.getElementById('watch')
watch.addEventListener('mouseenter', ()=>{
    watch.src =" images/categories/watch2.png"
})
watch.addEventListener('mouseleave', ()=>{
    watch.src =" images/categories/watch.png"
})

// bag
const bag = document.getElementById('bag')
bag.addEventListener('mouseenter', ()=>{
    bag.src =" images/categories/bag2.png"
})
bag.addEventListener('mouseleave', ()=>{
    bag.src =" images/categories/bag.png"
})


// shoe
const shoe = document.getElementById('shoe')
shoe.addEventListener('mouseenter', ()=>{
    shoe.src =" images/categories/shoe-3.png"
})
shoe.addEventListener('mouseleave', ()=>{
    shoe.src =" images/categories/shoes.png"
})


/*৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে।*/

const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick', ()=>{
    subscribe.style.backgroundColor = 'pink';
})