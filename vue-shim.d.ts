// Module declaration tells TypeScript to assume every ".Vue" file is a Vue type
declare module "*.vue" {
    import Vue from "vue"
    export default Vue
}