<template>
    <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a class="active" href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
    </div>
</template>

<script>
export default {
    name: 'Paginations'
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

    .pagination {
        margin: 15px 0;
        background: $color-primary;
        display: inline-block;
    }

    .pagination a {
        padding: 8px 16px;
        color: #fff;
        float: left;
        text-decoration: none;
    }
</style>