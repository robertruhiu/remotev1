<template>
    <a-layout-footer style="min-height: 16rem;background-color: #1875d2;">



        <footer id="footer" :style="{padding:'3%'}">
            <div class="footer-wrap">
                <div class="ant-row gutter">
                    <hide-at breakpoint="mediumAndBelow">
                        <div class="ant-col-xs-12 ant-col-sm-12 ant-col-md-6 ">
                            <img class="imagecenter" src="@/assets/logo.svg" style="width: 50%">
                        </div>
                    </hide-at>

                    <div class="ant-col-xs-12 ant-col-sm-12 ant-col-md-6">
                        <div class="footer-center">

                            <div class="icons-list">
                                <a href="mailto:info@codeln.com" target="_top">
                                    <a-icon type="mail" />
                                </a>
                                <a class="text-muted" href="https://www.facebook.com/CodelnSpaces/" target="_blank">
                                    <a-icon type="facebook"/>
                                </a>
                                <a class="text-muted" href="https://www.linkedin.com/company/codeln/"
                                   target="_blank">
                                    <a-icon type="linkedin"/>
                                </a>
                                <a class="text-muted" href="https://twitter.com/Codeln_spaces" target="_blank">
                                    <a-icon type="twitter"/>
                                </a>
                                <a class="text-muted" href="https://instagram.com/codeln_spaces?igshid=wfibiwjbqe9e"
                                   target="_blank">
                                    <a-icon type="instagram"/>
                                </a>
                                <a class="text-muted" href="https://www.youtube.com/channel/UCJc8rd10wkhX2c1Htg4aF0Q"
                                   target="_blank">
                                    <a-icon type="youtube"/>
                                </a>
                                <a class="text-muted" href="https://medium.com/codeln" target="_blank">
                                    <a-icon type="medium"/>
                                </a>

                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </footer>


    </a-layout-footer>
</template>

<script>


    import {hideAt} from 'vue-breakpoints'

    export default {
        name: "Footer",
        components: { hideAt},
        data() {
            return {
                top: 10,
                bottom: 10,
            };
        },
    }
</script>

<style scoped>
    .imagecenter {


    }

    a {
        color: #ffffff;
    }

    .icons-list >>> .anticon {
        margin-right: 6px;
        font-size: 24px;
    }


</style>
