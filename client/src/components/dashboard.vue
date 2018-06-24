<template>
<b-container>
    <b-card-group deck>
        <b-card header="<b>Transaction List.</b>"
                class="txtWhite border"
                header-bg-variant="primary">
                <!-- aqui se puede agregar el for para las transacciones -->
            <b-card class="txtBlack border">
                <p class="grayBackground  txtWhite size"><b>Transaction #1</b></p>
                <b-row>
                    <b-col class=" ">
                        id transaction
                    </b-col>
                    <b-col class=" ">
                        concept
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="">
                        amount
                    </b-col>
                    <b-col class="">
                        from/to who
                    </b-col>
                </b-row>
            </b-card>
        </b-card>
    </b-card-group>
</b-container>
</template>
<script>
export default {
}
</script>
<style scoped>
.size{
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
}
.grayBackground{
    background-color: #5c636e;
}
.container{
    padding-top: 6em;
    text-align: center;
}
.border{
    border: 1px solid #fff !important;
}
.grayBorder{
    border: 1px solid #5c636e !important;
}
.txtWhite{
    color: #fff !important;
    font-family: 'Ubuntu';
}
.txtBlack{
    color: #5c636e !important;
    font-family: 'Ubuntu';
}
.bg-primary {
    background-color: #393e46 !important;
}
.card{
    position: relative;
    margin: 2.5em auto;
    padding: 20px 40px 40px;
    text-align: center;
    background: #fff;
    border: 1px solid #5c636e;
}
h4{
  font-family: 'Ubuntu';
  color: #5c636e;
}
</style>
