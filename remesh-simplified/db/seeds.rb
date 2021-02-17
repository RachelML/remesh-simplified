# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Conversations
movies = Conversation.create( title: "All about Movies", start_date: Date.today)
pizza = Conversation.create( title: "Favorite types of pizza", start_date: Date.today)

# messages
message1 = movies.messages.create( text: "Favorite movies growing up?")
message2 = movies.messages.create( text: "What movies have you been watching lately")
message3 = pizza.messages.create( text: "is deep dish better than thin crust?")

# Thoughts
message1.thoughts.create( text: "Mighty ducks")
message2.thoughts.create( text: "I have been watching bad tv on netflix but recently watched the sound of metal")
message3.thoughts.create( text: "I lived in new york for 10 years so thin crust is far superior")
