১. Interfaces এবং Types-এর মধ্যে পার্থক্য (TypeScript)

TypeScript–এ interface এবং type—দুটিই অবজেক্টের কাঠামো বা শেপ নির্ধারণ করতে ব্যবহৃত হয়। তবে কিছু মূল পার্থক্য রয়েছে:

✔ Interface মূলত অবজেক্টের স্ট্রাকচার নির্ধারণে ব্যবহৃত হয়
interface User {
  name: string;
  age: number;
}

✔ Type আরও বহুমুখী — এটি union, tuple, primitive, function signature ইত্যাদি সবকিছুতেই ব্যবহার করা যায়
type User = {
  name: string;
  age: number;
};

type ID = string | number;   // union  
type Point = [number, number]; // tuple

✔ Interface ‘extends’ করে বাড়ানো যায় (স্ট্রাকচারাল ইনহেরিট্যান্স)
interface Employee extends User {
  salary: number;
}

✔ Type ‘intersection’ (&) ব্যবহার করে কম্পোজ করা যায়
type Employee = User & {
  salary: number;
};

✔ Interface আবার ডিক্লারেশন মার্জিং সাপোর্ট করে (type করে না)
interface User {
  name: string;
}

interface User {
  age: number;
}

// এখন User = { name: string; age: number }

সংক্ষেপে:

Interface ⇒ অবজেক্টের আকৃতি নির্ধারণে উপযোগী।

Type ⇒ আরও শক্তিশালী ও বহুমুখী ব্যবহারযোগ্য।



২. keyof কীওয়ার্ডের ব্যবহার

keyof TypeScript–এ একটি বিশেষ অপারেটর, যা কোনো অবজেক্ট টাইপের কী (property names) গুলোকে string literal union হিসেবে বের করে।

উদাহরণ:
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

type UserKeys = keyof User;


এখন:

UserKeys = "name" | "age" | "isAdmin"


এর ফলে আপনি নিরাপদভাবে নির্দিষ্ট property অ্যাক্সেস করার টাইপ-চেক তৈরি করতে পারেন।

আরও ব্যবহারিক উদাহরণ:
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { name: "Rahim", age: 25 };

const value = getValue(user, "name"); // ঠিক আছে
// getValue(user, "salary"); // ❌ এরর — কারণ "salary" User-এর key নয়


keyof এর মাধ্যমে TypeScript বুঝতে পারে কোন কোন property অবজেক্টে আছে এবং ভুল key ব্যবহার করলে আগেই সতর্ক করে।