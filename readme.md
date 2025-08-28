1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**_Ans:_**
**getElementById('id'):** নির্দিষ্ট id দিয়ে একটি element কে খুঁজে পাওয়ার জন্য getElementById ব্যবহার করা হয় ।যদি কিছু ম্যাচ না করে, তাহলে null return করে।

**getElementsByClassName('className'):** নির্দিষ্ট class দিয়ে কয়েকটি element কে খুঁজে পাওয়ার জন্য getElementsByClassName ব্যবহার করা হয় । এটি একটি live HtmlCollection এ দেয় ।যদি কিছু ম্যাচ না করে, তাহলে খালি একটা array return করে ।

**querySelector(selector):** CSS selector ব্যবহার করে প্রথম matching element টি return করে। যেমনঃ কিছু li তে same class এর নাম দেওয়া আছে।এতে প্রথম matching element return পাব। যদি কিছু ম্যাচ না করে, তাহলে null return করে ।
**querySelectorAll(selector):** CSS selector ব্যবহার করে সব matching element return করে। যা একটি static NodeList এ দেয়া । যদি কিছু ম্যাচ না করে, তাহলে খালি একটা array return করে।

2. How do you **create and insert a new element into the DOM**?

**_Ans:_**
createElement() দিয়ে নতুন element তৈরি করব । .innerHtml / .innerText দিয়ে সেই element এ new content সেট করব। যদি element এ কোন style এর attributes set করতে চাই তাহলে, .classList.add() বা .setAttribute() দিয়ে attributes যোগ করব। তারপর কোন একটা container এ append করব। অর্থাৎ, .appendChild() দিয়ে DOM-এ যুক্ত করব।

3. What is **Event Bubbling** and how does it work?

**_Ans:_**
যখন একটা element এ click event ঘটে, তখন সে প্রথমেই তার element কে টার্গেট করে ধাপে ধাপে তার parent এর কাছে ,তার parent এর কাছে ইত্যাদি উপরে উঠাতে থাকে। এইভাবে ধাপে ধাপে উপরে উঠাকে Event Bubbling বলে।

যেমনঃ

<!-- <div>
<h1>Event Bubbling Parent</h1>
<div>
<button id='add-btn'>Add Me</button>
</div>
</div> -->

<script>
    const btn = document.getElementById("add-btn");
      btn.addEventListener("click", function () {
        console.log(btn.parentNode.parentNode);
      });
</script>

button এ ক্লিক করলে, প্রথমে button-এর listener, তারপর সেই button-এর parent, তারপর parent ।এইভাবে ধাপে ধাপে উপরে উঠে।

4. What is **Event Delegation** in JavaScript? Why is it useful?

**_Ans:_**
**Event Delegation :** Event Delegation হলো একাধিক অনুরূপ child element এর জন্য আলাদা আলাদা event listener না নিয়ে, একটি parent element এর জন্য একটি মাত্র event listener ব্যবহার করা । এই Event Delegation প্রক্রিয়াটি event bubbling উপর ভিত্তি করে কাজ করে।

**Event Delegation ব্যবহার করার কারণ ঃ**
**.** যদি DOM-এ নতুন child element ডাইনামিকভাবে যোগ করা হয়, তবে অতিরিক্ত কোড ছাড়াই parent এর event listener সেই নতুন element এর event কে ধরতে পারে ।

**.** প্রতিটি child element এ আলাদা করে event listener যোগ করার পরিবর্তে, একটি parent element এর একটি মাত্র listener ব্যবহার করলে মেমোরি ব্যবহার কমে এবং পারফরম্যান্স বৃদ্ধি পায়।

5. What is the difference between **preventDefault() and stopPropagation()** methods?

**_Ans:_**
**preventDefault() :** ব্রাউজারের default কাজ বন্ধ করে দেয়। কিন্তু bubbling বন্ধ হয় না । যেমনঃ form এর button click করলে যে বারবার পেজ reload হয় সেটি বন্ধ করে preventDefault() method টি ।

**stopPropagation() :** ব্রাউজারের default কাজ বন্ধ করে না ।কিন্তু bubbling করা বন্ধ করে দেয় । তখন event আর parent element এ যেতে পারে না।যেমনঃ body এর ভিতরে section। section এর ভিতরে ul । ul এর ভিতরে কয়েকটা li ।এখন li click করলে bubbling হয়ে উপরের element গুলো আসবে। সেটি বন্ধ করার জন্য stopPropagation() method টি ব্যবহার করা হয়।
