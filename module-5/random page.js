<script type="text/javascript">
    var pages = [
        "new-restaurant.html",
        "menu-categories.html",
        "single-catrgory.html"
    ];

    function randomPage() {
        return pages[Math.round(Math.random() * (pages.length - 1))];
    }

    location.href= randomPage();
</script>