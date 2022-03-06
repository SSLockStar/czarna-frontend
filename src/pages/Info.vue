<template>
  <div class="top-section">
    <div class="czarna-container">
      <h1 class="title mb-2 text-center md:text-left">Baza wiedzy</h1>
      <span class="description">Przewodnik pomocy w obsłudze naszego systemu oraz najczęściej zadawane pytania</span>
    </div>
  </div>
  <div class="content-section">
    <div class="czarna-container grid grid-cols-12 gap-4">
      <div class="left-section col-span-12 md:col-start-2 md:col-span-4">
        <div class="accordion">
          <div class="accordion-item">
            <div
              class="accordion-title"
              :class="{'selected': selected === 0}"
              @click="setSelected(0)"
            >
              <span>PODSTAWY</span>
              <font-awesome-icon :icon="{prefix: 'fas', iconName: 'angle-down'}" class="ml-2 icon" v-if="selected !== 0"/>
              <font-awesome-icon :icon="{prefix: 'fas', iconName: 'angle-up'}" class="ml-2 icon" v-if="selected === 0"/>
            </div>
            <div class="accordion-body" v-if="selected === 0">
              <a href="#wiedzy-title">Pytanie nr jeden w zagnieżdżonej liście</a>
              <a href="#section-one">Pytanie nr dwa w zagnieżdżonej liście</a>
              <a href="#question-one">Pytanie nr trzy w zagnieżdżonej liście</a>
              <a href="#question-two">Pytanie nr cztery w zagnieżdżonej liście całkiem długie swoją drogą</a>
            </div>
          </div>

          <div class="accordion-item">
            <div
              class="accordion-title"
              :class="{'selected': selected === 1}"
              @click="setSelected(1)"
            >
              <span>NAJCZĘŚCIEJ ZADAWANE PYTANIA</span>
              <font-awesome-icon :icon="{prefix: 'fas', iconName: 'angle-down'}" class="ml-2 icon" v-if="selected !== 1"/>
              <font-awesome-icon :icon="{prefix: 'fas', iconName: 'angle-up'}" class="ml-2 icon" v-if="selected === 1"/>
            </div>
            <div class="accordion-body" v-if="selected === 1">
              <a href="#wiedzy-title">Pytanie nr jeden w zagnieżdżonej liście</a>
              <a href="#section-one">Pytanie nr dwa w zagnieżdżonej liście</a>
              <a href="#question-one">Pytanie nr trzy w zagnieżdżonej liście</a>
              <a href="#question-two">Pytanie nr cztery w zagnieżdżonej liście całkiem długie swoją drogą</a>
            </div>
          </div>

          <div class="accordion-item">
            <div
              class="accordion-title"
              :class="{'selected': selected === 2}"
              @click="setSelected(2)"
            >
              <span>PODSTAWY</span>
              <font-awesome-icon :icon="{prefix: 'fas', iconName: 'angle-down'}" class="ml-2 icon" v-if="selected !== 2"/>
              <font-awesome-icon :icon="{prefix: 'fas', iconName: 'angle-up'}" class="ml-2 icon" v-if="selected === 2"/>
            </div>
            <div class="accordion-body" v-if="selected === 2">
              <a href="#wiedzy-title">Pytanie nr jeden w zagnieżdżonej liście</a>
              <a href="#section-one">Pytanie nr dwa w zagnieżdżonej liście</a>
              <a href="#question-one">Pytanie nr trzy w zagnieżdżonej liście</a>
              <a href="#question-two">Pytanie nr cztery w zagnieżdżonej liście całkiem długie swoją drogą</a>
            </div>
          </div>

          <div class="accordion-item">
            <div
              class="accordion-title"
              :class="{'selected': selected === 3}"
              @click="setSelected(3)"
            >
              <span>PODSTAWY</span>
              <font-awesome-icon :icon="{prefix: 'fas', iconName: 'angle-down'}" class="ml-2 icon" v-if="selected !== 3"/>
              <font-awesome-icon :icon="{prefix: 'fas', iconName: 'angle-up'}" class="ml-2 icon" v-if="selected === 3"/>
            </div>
            <div class="accordion-body" v-if="selected === 3">
              <a href="#wiedzy-title">Pytanie nr jeden w zagnieżdżonej liście</a>
              <a href="#section-one">Pytanie nr dwa w zagnieżdżonej liście</a>
              <a href="#question-one">Pytanie nr trzy w zagnieżdżonej liście</a>
              <a href="#question-two">Pytanie nr cztery w zagnieżdżonej liście całkiem długie swoją drogą</a>
            </div>
          </div>

          <div class="accordion-item">
            <div
              class="accordion-title"
              :class="{'selected': selected === 4}"
              @click="setSelected(4)"
            >
              <span>PODSTAWY</span>
              <font-awesome-icon :icon="{prefix: 'fas', iconName: 'angle-down'}" class="ml-2 icon" v-if="selected !== 4"/>
              <font-awesome-icon :icon="{prefix: 'fas', iconName: 'angle-up'}" class="ml-2 icon" v-if="selected === 4"/>
            </div>
            <div class="accordion-body" v-if="selected === 4">
              <a href="#wiedzy-title">Pytanie nr jeden w zagnieżdżonej liście</a>
              <a href="#section-one">Pytanie nr dwa w zagnieżdżonej liście</a>
              <a href="#question-one">Pytanie nr trzy w zagnieżdżonej liście</a>
              <a href="#question-two">Pytanie nr cztery w zagnieżdżonej liście całkiem długie swoją drogą</a>
            </div>
          </div>
        </div>
      </div>
      <div class="right-section col-start-1 col-span-12 md:col-start-6 md:col-span-6">
        <h3 id="wiedzy-title">Najczęściej zadawane pytania h3</h3>
        <div class="box mb-9">
          <p>PRZEJDŹ DO</p>
          <span>Section number one</span>
          <span>Section number two</span>
          <span>Section number three</span>
        </div>
        <p class="mb-8">The text paragraph size should be displayed at 18 px. This is clear to the user.</p>

        <h4 id="section-one" class="mb-6">Section number one h4</h4>
        <span class="section-body mb-9">Id eum ab. Aut nihil exercitationem aperiam. Itaque voluptatem labore culpa ullam pariatur qui vel. Sit ut et qui ducimus. Aut dolor quae voluptates blanditiis aut minima voluptatem animi. Rem dolore assumenda tempore quo et quasi eum voluptatum dolorem. Non voluptatem aut id eveniet. Asperiores dignissimos voluptatibus repellendus doloremque.</span>

        <h5 id="question-one" class="mb-6">Najczęściej zadawane pytania h5</h5>
        <p>The text paragraph size should be displayed at 18 px. This is clear to the user.</p>
        <img class="my-9 rounded-xl" src="../assets/img/image.jpg" />

        <h6 id="question-two" class="mb-6">Najczęściej zadawane pytania h6</h6>
        <p>The text paragraph size should be displayed at 18 px. This is clear to the user.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
  data() {
    return {
      selected: -1
    }
  },
  methods: {
    setSelected: function(val) {
      if (this.selected === val) {
        this.selected = -1;
      } else {
        this.selected = val;
      }
    }
  }
}
</script>

<style scoped>
  div.top-section {
    background: #EFF3F7 0% 0% no-repeat padding-box;
    padding: 3.5rem;
  }
  div.top-section h1.title {
    font-size: 3.5rem;
    line-height: 4.375rem;
    font-weight: bold;
    color: #14161F;
  }

  div.top-section span.description {
    color: #525F7A;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  div.content-section {
    padding: 69px 0 99px 0;
  }
  div.content-section div.right-section h3 {
    font-size: 1.75rem;
    line-height: 2.25rem;
    margin-bottom: 25px;
    font-weight: bold;
    color: #14161F;
  }

  div.content-section div.right-section div.box {
    border: 1px solid #DFE2E6;
    border-radius: 12px;
    padding: 32px 27px;
  }

  div.content-section div.right-section div.box p {
    font-size: 18px; line-height: 2rem;
    color: #14161F;
    margin-bottom: 1.5rem;
  }

  div.content-section div.right-section div.box span {
    display: block;
    color: #378EB5;
    margin-bottom: 1rem;
  }

  div.content-section div.right-section div.box span:last-child {
    margin-bottom: 0;
  }

  div.content-section div.right-section p {
    font-size: 18px;
    line-height: 28px;
    color: #14161F;
  }

  div.content-section div.right-section h4 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: #14161F;
  }

  div.content-section div.right-section span.section-body {
    font-size: 18px;
    line-height: 28px;
    color: #14161F;
    display: block;
  }

  div.content-section div.right-section h5 {
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 2.25rem;
    color: #14161F;
  }

  div.content-section div.right-section h6 {
    font-weight: bold;
    font-size: 18px;
    line-break: 28px;
    color: #14161F;
  }

  div.accordion div.accordion-item {
    margin-bottom: 1.5rem;
  }

  div.accordion div.accordion-item:hover {
    cursor: pointer;
  }

  div.accordion div.accordion-item div.accordion-title span {
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: #525F7A;
    font-weight: bold;
  }

  div.accordion div.accordion-item div.accordion-title .icon {
    color: #525F7A;
  }

  div.accordion div.accordion-item div.accordion-body {
    padding-left: 2rem;
    padding-top: 1rem;
  }

  div.accordion div.accordion-item div.accordion-body a {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #378EB5;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    display: block;
  }

  div.accordion div.accordion-item div.accordion-title.selected span {
    color: #14161F;
  }
</style>