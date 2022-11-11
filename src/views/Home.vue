<template>
  <div class="home">
    <svg-icon icon-class="kiwi" />
    <svg-icon icon-class="pitaya" />
    <svg-icon icon-class="watermelon" />
    <hr />
    <svg-icon icon-class="transfer-in" />
    <svg-icon icon-class="transfer-out" />
    <hr />
    <svg-icon icon-class="zrzj" />
    <svg-icon icon-class="zczj" />
    <hr />

    <svg class="blue shape-triangle-3 shape-triangle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="415" height="455" viewBox="0 0 415 455" data-reactid="48">
      <defs data-reactid="49">
        <filter id="shape-triangle" width="182.4%" height="172.4%" x="-41.2%" y="-27.2%" filterUnits="objectBoundingBox" data-reactid="50">
          <feOffset dy="30" in="SourceAlpha" result="shadowOffsetOuter1" data-reactid="51"></feOffset>
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="35" data-reactid="52"></feGaussianBlur>
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" data-reactid="53"></feColorMatrix>
          <feMerge data-reactid="54">
            <feMergeNode in="shadowMatrixOuter1" data-reactid="55"></feMergeNode>
            <feMergeNode in="SourceGraphic" data-reactid="56"></feMergeNode></feMerge>
        </filter>
      </defs>
      <g filter="url(#shape-triangle)" fill="none" fill-rule="evenodd" transform="translate(-106 -734)" data-reactid="57">
        <path class="shape-" d="M170.912 767.496l287.176 74.364a2 2 0 0 1 1.204 2.98l-154.94 253.066a2 2 0 0 1-3.56-.295L168.556 770.18a2 2 0 0 1 2.356-2.685z" data-reactid="58"></path>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.shape-triangle path {
  fill: blue;
  color: #F24338;
}
</style>
