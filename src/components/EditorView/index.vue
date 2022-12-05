<template>
  <Editor
    class="editor-view__content"
    v-model="valueHtml"
    mode="default"
    @onCreated="handleCreated"
  />
</template>
<script lang="ts">
import { Editor } from "@wangeditor/editor-for-vue";
import { ref, defineComponent, shallowRef, watch } from "vue";
export default defineComponent({
  components: {
    Editor,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const valueHtml = ref("");
    const editorRef = shallowRef();
    const handleCreated = (editor: any) => {
      editorRef.value = editor;
      editorRef.value.disable();
    };

    watch(()=>props.value,()=>{
      valueHtml.value = props.value;
    },{
      immediate:true
    })
    return {
      valueHtml,
      handleCreated,
    };
  },
});
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
<style lang="less">
.editor-view__content {
  padding-bottom: 20px;
  min-height: 500px !important;
  overflow: hidden !important;
}
</style>
