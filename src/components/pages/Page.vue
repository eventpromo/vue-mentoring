<template>
  <div class="page">
    <PageHeader>
      <slot name="header"></slot>
    </PageHeader>
    <PageManagementPanel>
      <slot name="panel"></slot>
    </PageManagementPanel>
    <PageContent>
      <slot></slot>
    </PageContent>
  </div>
</template>

<script>
import PageHeader from "./PageHeader";
import PageManagementPanel from "./PageManagementPanel";
import PageContent from "./PageContent";

export default {
  name: "Page",
  components: {
    PageHeader,
    PageManagementPanel,
    PageContent
  }
};
</script>

<style lang="scss">
.page {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 300px auto;
  grid-gap: 20px;
  height: 100vh;
}
</style>
