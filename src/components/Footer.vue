<!--
#. This is the FooterComponent
#. This component contains the footer section of the application
-->

<template>
    <div class="footer">
        <div class="left-side">
            <p>Copyright &copy; All Rights Reserved 2023</p>
        </div>
        <div class="right-side">
            <p><span>Designed By: </span>Anmol Kumar Singh</p>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Footer',
}
</script>

<style scoped>
.footer {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    color: #fff;
    background-color: #333;
    align-items: center;
}
.footer .left-side {
    grid-column: 1/2;
    grid-row: 1/2;
    text-align: left;
    padding-left: 20px;
}
.footer .right-side {
    grid-column: 2/3;
    grid-row: 1/2;
    text-align: right;
    padding-right: 20px;
}
.footer p {
    font-size: 13px;
}
.footer .left-side p {
    color:darkgray;
}
.footer .right-side p {
    color:burlywood;
}
.footer .right-side p span {
    color:darkgray;
}
</style>