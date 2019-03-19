<template>
	<main>
		
		<nav>
			<div class="drag-region"></div>
			<!--<div class="win-control">
				<button id="close"/>
				<button id="minimize"/>
				<button id="maximise"/>
			</div>-->
			<div :class="['content', menuView]">
				<ul class="tabs">
					<li :class="{ 'active': menuView === 'scrum'}" @click="menuView = 'scrum', $router.push('/databases/')">Scrum</li>
					<li :class="{ 'active': menuView === 'activity'}" @click="menuView = 'activity', $router.push('/activity/')">Activity</li>
					<li :class="{ 'active': menuView === 'meetings'}" @click="menuView = 'meetings', $router.push('/meetings/')">Meets</li>
					<li :class="{ 'active': menuView === 'chatrooms'}" @click="menuView = 'chatrooms', $router.push('/chatbox/')">Chat</li>
				</ul>
				<input type="search" placeholder="Search">
				<div class="scrum">
					<div class="breadcrumb">
						<span :class="['chip', { 'active': menuType === 'databases' }]" @click="menuType = 'databases'">
							<img src="~assets/img/icons/database-solid.svg" alt="database">
							Data
						</span>
						<span :class="['chip', { 'active': menuType === 'projects' }]" @click="menuType = 'projects'">
							<img src="~assets/img/icons/folder-solid.svg" alt="project">
							Projects
						</span>
					</div>
					<transition name="fade" mode="out-in">
						
						<ul v-if="menuType === 'databases'" class="databases">
							<li v-for="(project, index) in [1,2,3,4,5,6,7,8,9,10]"
									:key="index"
									@click="$router.push('/databases/')">
								<img src="~assets/img/icons/database-solid.svg" alt="project">
								DB Name
								<form>
									<label>Name:</label>
									<input type="text" value="Project Name">
									<label>Scrum Master:</label>
									<input type="text" value="Owen Jackson">
									<label>Description:</label>
									<textarea>A project description</textarea>
									<button>Save</button>
								</form>
							</li>
						</ul>

						<ul v-if="menuType === 'projects'" class="projects">
							<li v-for="(project, index) in [1,2,3,4,5,6,7,8,9,10]"
									:key="index"
									@click="$router.push('/project/')">
								<img src="~assets/img/icons/folder-solid.svg" alt="project">
								Project Name
								<form>
									<label>Name:</label>
									<input type="text" value="Project Name">
									<label>Scrum Master:</label>
									<input type="text" value="Owen Jackson">
									<label>Description:</label>
									<textarea>A project description</textarea>
									<button>Save</button>
								</form>
							</li>
						</ul>
					</transition>
				</div>
				<div class="chatrooms">
					<ul>
						<li v-for="chatbox in [1,2,3,4,5,6,7,8,9]" :key="chatbox">Label of chatbox</li>
					</ul>
				</div>
				<div class="direct-messages">
					<h3>TEAMS</h3>
					<ul>
						<li v-for="chatbox in [1,2,3,4,5,6,7,8,9]" :key="chatbox">Label of person</li>
					</ul>
				</div>
			</div>
			<footer>
				<span class="profile profile--medium" data-src="url(../img/profile/lawrence_turton.jpg)"/>
				<div>
					<h4>Joe Jackson</h4>
					<span>Frontend Developer</span>
					<button class="contact-info">
						<nuxt-link to="/profile">
							<img src="@/assets/img/icons/address-card-solid.svg" width="20" alt="Contact Info" title="contact info">
						</nuxt-link>
					</button>
				</div>
			</footer>
		</nav>
		
		<section :class="['main-content', this.$nuxt.$route.name]">
			<nuxt/>
		</section>

		<button id="sidebar-open-btn" @click="sidebarOpen = !sidebarOpen">
			<menu-icon width="20" height="20"/>
		</button>
		
		<aside id="main-sidebar" :class="{'open': sidebarOpen}">
			<card/>
			<card/>
			<card/>
		</aside>
	</main>
</template>

<script>
import Card from '@/components/blocks/Card'
import Lightbox from '@/components/blocks/Lightbox'
import MenuIcon from '~/assets/img/icons/bars-solid.svg?inline'

export default {
	name: 'defaultView',
	components: { Card, Lightbox, MenuIcon },
	data() {
		return {
			menuView: 'scrum',
			menuType: 'databases',
			sidebarOpen: false
		}
	},
	mounted() {
		document.addEventListener('submit', event => event.preventDefault())
	}
}
</script>

<style>
html {
	transform: translate3d(0,0,0);
}
</style>


<style lang="scss" scoped>
@import '~assets/css/color.scss';
.drag-region {
	position: absolute;
	top: 0;
	left: 0;
	width: 200000000px;
	height: 22px;
	padding: 0;
	margin: 0;
	-webkit-app-region: drag;
}
nav {
	position: absolute;
	top: 0;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 281px;
	height: 100%;
	border-right: 1px solid #ddd;
	padding: 22px 10px 10px 10px;
	background: rgb(235, 235, 235);
	/* Frameless vibrant design
	background: rgba(255, 255, 255, .4);*/
	border-radius: 5px 0px 0px 0px;

	/*&:before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 40px;
		background: linear-gradient(0deg, rgba(221,221,221,0) 0%, rgba(221,221,221,1) 44%);
		z-index: -2;
		border-radius: 5px 0 0 0;
	}*/

	div {
		margin-bottom: 10px;

		&.content {
			// position: absolute;
			top: 32px;
			bottom: 70px;
			right: 10px;
			left: 10px;
			display: flex;
			flex-direction: column;
			flex-grow: 1;
		}

		&:last-child {
			padding-bottom: 0;
		}
	}

	.win-control {
		display: flex;

		button {
			width: 12px;
			height: 12px;
			border-radius: 20px;
			margin-right: 5px;
		}

		button:first-child {
			background: #fc615d;
		}

		button:nth-child(2) {
			background: #FDBE41;
		}

		button:last-child {
			background: #35C94A;
		}
	}

	> .content {
		.scrum,
		.chatrooms,
		.direct-messages {
			display: none;
			overflow-y: auto;
			position: relative;
			top: 10px;
			flex-grow: 1;
		}
		&.scrum .scrum,
		&.chatrooms .chatrooms,
		&.direct-messages .direct-messages {
			display: block;
		}
		.breadcrumb {
			padding-top: 0;
		}
		ul {
			padding: 0;
			margin: 0;
			list-style-type: none;
			white-space: nowrap;

			&.tabs {
				margin-bottom: 10px;
			}

			li {
				border-radius: 3px;
				padding: 5px 0;
				overflow: hidden;
				text-overflow: ellipsis;
				user-select: none;
				cursor: default;

				&.active {
					background: $gray-100;
				}

				form {
					display: none !important;
				}

				&.edit {
					border: 2px dotted $gray-200;
					background: transparent;

					form {
						display: flex !important;
					}
				}

				img {
					height: 10px;
				}

				form {
					padding: 10px;
					display: flex;
					flex-direction: column;

					label {
						padding: 10px 0px;

						&:first-child {
							padding-top: 0;
						}
					}
				}
			}
		}
	}
	footer {
		display: flex;
		min-height: 60px;

		.profile {
			margin-right: 10px;
		}

		div {
			flex-grow: 1;
		}

		h4 {
			margin: 0 0 5px 0;
		}

		button {
			align-self: flex-end;
		}

		.contact-info {
			position: absolute;
			right: 10px;
			bottom: 10px;
			padding: 0;
			display: flex;
		}
	}
	h3 {
		text-transform: uppercase;
		font-size: 0.7em;
	}
}
.main-content {
	transform: translate3d(0,0,0);
	position: absolute;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	overflow-y: auto;
	max-width: 100%;
	width: 100%;
	left: 0;
	z-index: -1;
	padding-left: 281px;
	right: 0;
	top: 0;
	// padding-top: 32px;
	bottom: 0;
	overflow: auto;
	background: white;
	border-radius: 0 5px 0 0;
	transition: background-color 0.2s;

	&.databases {
		background: #fcfcfc;
	}

	/*&:before {
		content: '';
		display: block;
		position: fixed;
		top: 0;
		left: 281px;
		right: 0;
		height: 40px;
		background: linear-gradient(0deg, rgba(254,254,254,0) 0%, rgba(254,254,254,1) 44%);
		z-index: -1;
		border-radius: 0 5px 0 0;
	}*/
}
#sidebar-open-btn {
	position: absolute;
	top: 10px;
	right: 5px;
	width: 25px;
	height: 25px;
	z-index: 11;
}
#main-sidebar {
	position: absolute;
	right: -100%;
	width: 300px;
	top: 0;
	bottom: 0;
	z-index: 10;
	overflow-x: hidden;
	overflow-y: auto;
	backdrop-filter: blur(3px);
	background: rgba(249, 249, 249, 0.9);
	transition: right 0.2s;
	padding-top: 30px;

	&.open {
		right: 0;
	}

	.card {
		max-width: 90%;
		margin: 5%;
	}
}
</style>
