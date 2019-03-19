import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			'current_user': {
				/* Profile inteface */
				'offline': false,
				'username': 'Lawrence Turton',
				'occupation': 'Frontend Developer',
				/* Std interface check */
				'phone': {
					'home_extension': '44',
					'home': '0115838485',
					'work_extension': '44',
					'work': '0929283848'
				},
				'email': {
					'personal': '...@...',
					'work': '@...'
				}
			},
			'chatbox': {
				'chat_rooms': [
					{
						/* Chatroom interface */
						'offline': false,
						'name': 'My Chatroom 1',
						'invited_users': [
							/* Profile inteface objects */
						],
						'comments': [
							{
								/* Chatroom-Comment Interface */
								'offline': false,
								'post_by': '',
								'post_date': '',
								'post_content': '<html sanitised string>'
							}
						]
					}
				],
				'direct_messages': [
					{
						'name': 'Lawrence Turton',
						'profile_id': 0,
						'comments': [
							{
								/* Chatroom-Comment Interface */
								'offline': false,
								'post_by': '',
								'post_date': '',
								'post_content': '<html sanitised string>'
							}
						]
					}
				]
			},
			/* You need DB's to be stored on server */
			'databases': [
				{
					'info': {
						/* Database interface */
						'db_name': 'Evolve Retail',
						'db_connection': 'localhost',
						'db_username': 'root',
						'db_password': '',
						'db_admins': [
							/*User ID of the person who created the database and is allowed to create projects and epics */
							'Lawrence Turton'
						]
					},
					/* All data is pulled from server */
					'projects': [
						/* Projects interface */
						{
							'name': 'Project Name',
							'pinned': false,
							'offline': false,
							'type': 'ticked', /* type check for example ticket, bug ... */
							'scrum_master': 'Lawrence Turton',
							'short_description': 'A short description',
							'description': 'A project description',
							'color': '#eeeeee',
							'image': 'url...',
							'members': {
								/* Key is profile ID */
								0: {
									/* Profile inteface */
									'id': 0,
									'allowed': true,
									'offline': false,
									'name': 'Lawrence Turton',
									'occupation': 'Frontend Developer'
								}
							},
							'epics': [
								/* Epics interface */
								{
									'id': 0,
									'offline': false,
									'name': 'Epic Name',
									'kanban': ['development','in progress','testing','review','signed off'], /* Constant created once only! */
									'cards': [
										/* Card interface */
										{
											'id': 0,
											'offline': false,
											'title': 'Create Hero Component',
											'description': 'information',
											'time_started': new Date(),
											'time_taken': new Date(),
											'time_end': new Date(),
											'assigned': '',
											'reporter': '',
											'pinned': [
												/* Each object has an interface relating to the component such as comment, checklist and more */
											],
											'content': {
												'development_1' : [
													/* Each object has an interface relating to the component such as comment, checklist and more */
												],
												'in progress_1' : [
													/* Each object has an interface relating to the component such as comment, checklist and more */
												],
												'testing_1' : [
													/* Each object has an interface relating to the component such as comment, checklist and more */
												],
												'review_1' : [
													/* Each object has an interface relating to the component such as comment, checklist and more */
												],
												'signed off_1' : [
													/* Each object has an interface relating to the component such as comment, checklist and more */
												],
												'development_2' : [
													/* Each object has an interface relating to the component such as comment, checklist and more */
												],
												'in progress_2' : [
													/* Each object has an interface relating to the component such as comment, checklist and more */
												],
												'testing_2' : [
													/* Each object has an interface relating to the component such as comment, checklist and more */
												],
												'review_2' : [
													/* Each object has an interface relating to the component such as comment, checklist and more */
												],
												'signed off_2' : [
													/* Each object has an interface relating to the component such as comment, checklist and more */
												]
											},
											'kanban_status': 'development', /* If doesn't match new value will be 'unassigned' */
											'dependant_cards': [2] /* ID of dependant cards */
										}
									]
								}
							]
						}
					]
				}
			]
		},
		mutations: {
			merge_object (state) {
				state.access /* state.db for example the key or array position we want to edit */
				state.interface /* interface to check object */
				/* Add offline property true or false */
				state.object /* object to be merged */
				state.sql /* SQL operation such as update or create */
			},
			delete_object (state) {
				state.access /* which object to edit */
				state.table /* SQL table to access */
				state.id /* ID of record to delete */
			},
			on_online (state) {
				/* Trigger mutation when online. Recursively look at each object for offline status. If offline sync to online and change key value. */
			}
		}
	})
}

export default createStore