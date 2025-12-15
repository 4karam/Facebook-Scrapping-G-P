let mainDiv = document.body.querySelector("div.x9f619.x1ja2u2z.x2lah0s.x1n2onr6.x1qjc9v5.x78zum5.xl56j7k.x15zctf7.x1a02dak.x9otpla.x1n0m28w.x1wsgfga.xp7jhwk");
let data = []; 
let post = mainDiv?.children[1]?.children[1]?.children[1]?.children;

function save() {
  let json = JSON.stringify(data, null, 2); 
  let file = new Blob([json], { type: "application/json" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = "group.json";
  a.click();
  URL.revokeObjectURL(a.href);
}

async function pushData() {
  if (post && post.length > 0) {
    for (let i = 0; i < post.length; i++) {
      post[i].scrollIntoView();
      await new Promise(res => setTimeout(res, 10));
      let name = post[i]?.querySelector("div.xu06os2.x1ok221b")?.textContent ?? null;
      let postText = post[i]?.querySelector("div.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x1vvkbs.x126k92a")?.textContent ?? 'No Content';
      let like = post[i]?.querySelector("span.xrbpyxo.x6ikm8r.x10wlt62.xlyipyv.x1exxlbk")?.textContent ?? '0 Likes';
      let comment = post[i]?.querySelector("div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xeuugli.xg83lxy.x1h0ha7o.x10b6aqq.x1yrsyyn")?.textContent ?? '0 Comments';

      if (name === null) continue;
      let exists = data.some(d => d.name === name && d.content === postText);
      if (exists) continue;

      data.push({
        name: name,
        content: postText,
        comment: comment,
        like: like
      });
    }
    if(btn2){
      container.removeChild(btn2);
    }
    btn.style.color = "#fff";
    btn.disabled = false;
    btn.style.backgroundColor = "#1877f2";

    btn.innerText = "Start collecting posts";
    save();
  } else {
    post = mainDiv?.children[1]?.children[1]?.children[0]?.children;
    await pushData();
  }
}

let timerId;
let stop = false;
async function start() {
  btn.style.cursor = "wait";
  btn.disabled = true;
  btn.style.backgroundColor = "#04AA6D";
  btn.innerText = "Collecting posts ";
  if(stop === true){
    clearTimeout(timerId);

  }else{
  if (window.scrollY + window.innerHeight + 1 >= document.body.scrollHeight) {
    clearTimeout(timerId);
    await pushData();
  } else {
    window.scrollBy({
      top:  Math.floor(Math.random() * 101) + 200, 
      left: 0,  
      behavior: "smooth" 
    });;
    timerId = setTimeout(start, 200); 
  }}
}
let container = document.createElement("div");
container.style.position = "fixed";
container.style.right = "10px";  
container.style.bottom = "10px"; 
container.style.zIndex = 9999;
container.style.display = "flex"; 
container.style.gap = "10px"; 
document.body.appendChild(container);
let btn2 = document.createElement("button");
let btn = document.createElement("button");
btn.id = "btnScrapperByk4.RM";
btn.innerText = "Start collecting posts";
btn.style.padding = "10px";
btn.style.backgroundColor = "#1877f2";
btn.style.color = "#fff";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";
btn.onclick = () => {
  if (confirm("Ready to start collecting posts?")) {
    btn2.id = "btnScrapperByk4.RMstop";
    btn2.innerText = "Stop collecting posts";
    btn2.style.padding = "10px";
    btn2.style.backgroundColor = "#1877f2";
    btn2.style.color = "#fff";
    btn2.style.border = "none";
    btn2.style.borderRadius = "5px";
    btn2.style.cursor = "pointer";
    btn2.onclick = () => {
      stop = true;
      pushData();
    };
    container.appendChild(btn2);
    start(); 
  }
};

container.appendChild(btn);
