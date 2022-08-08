<template>
    <div class="container">
        <div class="navbar">
            <div @click="$router.push('/'); closeBurger()" class="intro__image">
                <div class="intro">
                    Travelline
                </div>
            </div>
            <div class="list__item" :class="openBurger ? 'active' : ''">
                <button @click="$router.push('/'); closeBurger()" id="home" class="item">Home</button>
                <button @click="$router.push('/events'); closeBurger()" id="Events" class="item">Events</button>
                <button @click="$router.push('/about'); closeBurger()" id="About" class="item">About</button>
                <button @click="$router.push('/blog'); closeBurger()" id="Blog" class="item">Blog</button>
                <button @click="$router.push('/contact'); closeBurger()" id="Contact" class="item">Contact</button>
            </div>
            <div class="burger" id="burger" @click="changeBurger()">
				<span></span>
			</div>
            <div class="number" :class="openBurger ? 'active' : ''">
                <img class="number__image" src="@/image/1542.svg"/>
                <button class="number__button">+1 (000) 000 000</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openBurger: false,
            }
    },
    methods: {
        changeBurger() {
            this.openBurger = !this.openBurger;
            this.$emit('clickBurger', this.openBurger)
        },
        closeBurger() {
            this.openBurger = false;
            this.$emit('clickBurger', this.openBurger)
        }
    }
}
</script>

<style scoped>
.container {
    z-index: 1000;
    position: relative;
    padding: 1vw 4vw 0px 4vw;
    background-color: #F0C53E;
    padding-bottom: 0.5vw;
}
.navbar {
    max-width: 1900px;
    margin: auto;
    height: 56px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.intro__image {
    width: 140px;
    background-repeat: no-repeat;
    background-image: url("@/image/5420.svg");
    background-size: 100% 100%;
    display: flex;
}
.intro__image:hover {
    cursor: pointer;
}
.intro {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    margin: auto;
    letter-spacing: 0.04em;
    color: white;
}
.list__item {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: space-between;
    min-width: 270px;
    max-width: 500px;
}
.item {
    background-color: transparent;
    border-width: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #252641;
}
.item:hover {
    cursor: pointer;
}
.item:active {
    color: #B25A59;
}
.item:target {
    color: aqua;
}
.number {
    width: 205px;
    background: #B25A59;
    border-radius: 80px;
    display: flex;
    align-items: center;
}
.number__button {
    background-color: transparent;
    border-width: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin-right: 10%;
}
.number__image {
    width: 22px;
    margin-left: 10%;
}
@media (max-width: 769px) {
    .burger span {
		content: '';
		background-color: #000;
		position: absolute;
		width: 50px;
		height: 0.7vw;
		top: 50%;
        top: 2.25vw;
		}
    .burger {
        margin: auto 0;
		display: block;
		position: relative;
		height: 5vw;
		width: 50px;
		z-index: 31;
	}
    .burger:before,.burger:after {
		content: '';
		background-color: #000;
		position: absolute;
		width: 100%;
		height: 0.7vw;
	}
    .burger:before {
		top: 0;
	}
	.burger:after {
		bottom: 0;
	}
    .list__item {
		overflow: auto;
		display: flex;
		position: fixed;
		font-size: 6vw;
		top: 60px;
		left: 0;
        height: 100%;
		width: 100%;
		background-color: #F0C53E;
		z-index: 30;
		text-align: center;
		flex-direction: column;
		transform: translateY(-120vh);
		transition: all 0.3s ease 0s;
        max-width: none;
        padding-bottom: 25%;
	}
	.list__item.active {
		transform: translateY(0);
	}
    .item {
        margin: auto;
        font-size: 27px;
    }
    .number {
		position: fixed;
		z-index: 31;
		justify-content: space-between;
		transform: translateY(-120vh);
		transition: all 0.3s ease 0s;
        top: 90%;
        width: 90%;
	}
	.number.active {
		transform: translateY(0);
	}
    .number__button {
        font-size: 20px;
        line-height: 60px;
        margin: auto;
    }
    .number__image {
        width: 40px;
    }
}
</style>