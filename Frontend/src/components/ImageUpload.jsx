import { useState } from "react";

import API from "../services/api";

import { toast } from "react-toastify";

function Upload() {

const [image, setImage] = useState(null);

const [loading, setLoading] = useState(false);

const submit = async () => {

if (!image) {

toast.error("Select an image");

return;

}

try {

setLoading(true);

const form = new FormData();

form.append("image", image);

const res = await API.post(

"/upload",

form

);

toast.success(

"Upload Successful"

);

console.log(res.data);

}

catch {

toast.error(

"Upload Failed"

);

}

finally {

setLoading(false);

}

};

return (

<div className="
bg-white
rounded-xl
shadow-md
p-8
max-w-xl
mx-auto
">

<h2 className="
text-2xl
font-bold
mb-6
">

Upload Image

</h2>


<div className="
border-2
border-dashed
rounded-lg
p-10
text-center
cursor-pointer
hover:bg-gray-50
">

<input

type="file"

accept="image/*"

onChange={(e)=>{

setImage(
e.target.files[0]
)

}}

className="w-full"

/>

</div>


{

image &&

<div className="mt-4">

<p className="text-gray-600">

Selected:

<span className="font-semibold ml-2">

{image.name}

</span>

</p>

</div>

}


<button

onClick={submit}

disabled={loading}

className="
w-full
mt-6
bg-black
text-white
py-3
rounded-lg
hover:opacity-90
disabled:bg-gray-400
"

>

{

loading ?

"Uploading..."

:

"Upload Image"

}

</button>

</div>

)

}

export default Upload;