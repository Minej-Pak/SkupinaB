<template>

  <h1>Paštetniki, Inc.</h1>
  <img class="pastetniki" src='@/assets/pastetniki.png' alt="logotip">
  <div class="mainDesc">
    <p>Podjetje Paštetniki, Inc. je podružnica multinacionalnega sklada Paštetarskih Iger.</p>
    <p>Podjetje je bilo ustanovljeno s strani naših pra-staršev daljnega leta 1969, ko so naši predniki opazili potencialni zaslužek z kazinoji.</p>
    <p>Ker je trg bil takrat že prevelik, niso pa imeli financ, ki so jih bili pripravljeni "zagémblat", so se odločili za preprostejšo pot, in to je:</p>

    <div class="ulliplaceholder">
      <ul>
        <li>Odkupovanje 51% deleža vseh potencialnih popularnih družabnih iger za $$$</li>
        <li>Izobraževanje in zaposlitev spremljevalcev za igre</li>
        <li>Posojanje iger</li>
        <li>Pripravljanje nepozabnih družabnih večerov</li>
      </ul>
    </div>
  </div>
  <div class="whyUs">
    <h2>Zakaj nas?</h2>
    <p>Dva razloga...</p>
    <div class="ulliplaceholder">
      <ul>
        <li>Če imate prijatelje, lahko najamete igro za večer, se ga ftrgate in uzivate</li>
        <li>Tudi mi potrebujemo denar ... Pls...</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
  h1{
    text-align: center;
    color: whitesmoke;
  }
  .mainDesc{
    color:whitesmoke;
    margin-top: 50px;
    text-align: center;
  }

  .ulliplaceholder{
    margin-left: 35%;
    text-align: left;
  }

  .whyUs{
    text-align: center;
    color: aliceblue;
  }

  .pastetniki{
    max-height: 200px;
    margin-left: 45%;
  }
</style>