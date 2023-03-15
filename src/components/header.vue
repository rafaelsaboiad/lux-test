<template>
  <header>
    <div id="locateTitle">
      <span id="gitText">GitHub</span>
      <span id="searchText">Search</span>
    </div>
    <div id="locateText">
      <span id="iniText">INÍCIO</span>
      <span id="favText">FAVORITOS</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerSection",
};
</script>

<style scoped>
header {
  display: flex;
  background-color: var(--color-background-nav);
  height: 84px;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-content: center;
}

#locateTitle {
  display: flex;
  height: 84px;
  width: 300px;
  justify-content: center;
  align-items: center;
  float: left;
}

#gitText {
  margin-right: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
}

#searchText {
  font-family: "Inter";
  font-style: italic;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
}

#locateText {
  display: flex;
  height: 84px;
  width: 391px;
  justify-content: center;
  align-items: center;
  float: right;
  margin-left: auto;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
}

#iniText {
  margin-right: 30px;
}

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
