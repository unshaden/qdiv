window.addEventListener("load",
    function() {
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display="block";
            },1000
        )
    }
);
            document.querySelector("#close").addEventListener
        ("click", function(){
                        document.querySelector(".popup").style.display = "none";
 });
        const popup = document.querySelector('.popup');
        window.addEventListener('load',() => {
            popup.classList.add('show-popup');
            popup.childNodes[1].classList.add('show-popup')
        })

        document.getElementById('open_btn').addEventListener('click',
        function() {
                    document.querySelector('.pg_modal').style.display='flex';
        });

        document.getElementById('close_btn').addEventListener('click',
        function() {
                    document.querySelector('.pg_modal').style.display='none';
        });