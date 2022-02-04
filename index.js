window.onload = function () {
    //ファイルの参照
    var storageRef = firebase.storage().ref();

    const DownloadTask1 = storageRef.child("uploaded01/3-2-1-○○.jpg");
    const DownloadTask2 = storageRef.child("uploaded01/3-2-2-○○.jpg");
    const DownloadTask3 = storageRef.child("uploaded01/3-2-3-○○.jpg");
    const DownloadTask4 = storageRef.child("uploaded01/3-2-4-○○.jpg");
    const DownloadTask5 = storageRef.child("uploaded01/3-2-5-○○.jpg");
    const DownloadTask6 = storageRef.child("uploaded01/3-2-6-○○.jpg");
    const DownloadTask7 = storageRef.child("uploaded01/3-2-7-○○.jpg");
    const DownloadTask8 = storageRef.child("uploaded01/3-2-8-○○.jpg");
    const DownloadTask9 = storageRef.child("uploaded01/3-2-9-○○.jpg");
    const DownloadTask10 = storageRef.child("uploaded01/3-2-10-○○.jpg");

    //画像データ呼び出し
    DownloadTask1.getDownloadURL().then((downloadURL) => {
        document.getElementById("image1").src = downloadURL;
    });
    DownloadTask2.getDownloadURL().then((downloadURL) => {
        document.getElementById("image2").src = downloadURL;
    });
    DownloadTask3.getDownloadURL().then((downloadURL) => {
        document.getElementById("image3").src = downloadURL;
    });
    DownloadTask4.getDownloadURL().then((downloadURL) => {
        document.getElementById("image4").src = downloadURL;
    });
    DownloadTask5.getDownloadURL().then((downloadURL) => {
        document.getElementById("image5").src = downloadURL;
    });
    DownloadTask6.getDownloadURL().then((downloadURL) => {
        document.getElementById("image6").src = downloadURL;
    });
    DownloadTask7.getDownloadURL().then((downloadURL) => {
        document.getElementById("image7").src = downloadURL;
    });
    DownloadTask8.getDownloadURL().then((downloadURL) => {
        document.getElementById("image8").src = downloadURL;
    });
    DownloadTask9.getDownloadURL().then((downloadURL) => {
        document.getElementById("image9").src = downloadURL;
    });
    DownloadTask10.getDownloadURL().then((downloadURL) => {
        document.getElementById("image10").src = downloadURL;
    });

    var nullURL = "http://127.0.0.1:8887/null" ;
    //画像データがない場合は灰色の画像を表示
    if(document.getElementById("image1").src = nullURL){
        image1.src = "back.png";
    }
    if(document.getElementById("image2").src = nullURL){
        image2.src = "back.png";
    }
    if(document.getElementById("image3").src = nullURL){
        image3.src = "back.png";
    }
    if(document.getElementById("image4").src = nullURL){
        image4.src = "back.png";
    }
    if(document.getElementById("image5").src = nullURL){
        image5.src = "back.png";
    }
    if(document.getElementById("image6").src = nullURL){
        image6.src = "back.png";
    }
    if(document.getElementById("image7").src = nullURL){
        image7.src = "back.png";
    }
    if(document.getElementById("image8").src = nullURL){
        image8.src = "back.png";
    }
    if(document.getElementById("image9").src = nullURL){
        image9.src = "back.png";
    }
    if(document.getElementById("image10").src = nullURL){
        image10.src = "back.png";
    }

    var reload =document.getElementById('reload');
    reload.addEventListener('click',function(){
        for(var i = 0; i<100; i++){
            setTimeout(function () {
                location.reload();
            }, 200);
        }
        
    });

    var disreload =document.getElementById('stop');
    disreload.addEventListener('click',function(){
        preventDefault();
    });
/*
    window.addEventListener('load',function(){
        //200ミリ秒で自動リロード
        setInterval('location.reload()',200);
    });
*/
}
