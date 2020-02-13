const axios = require('axios')

const users = [
    {
        // -- 1
        username: 'hcamacho',
        password: '1234',
        avatar_url: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/71185699_2689022334443487_6164016894329225216_o.jpg?_nc_cat=111&_nc_ohc=7uD7nVIoGUoAX-mfwG6&_nc_ht=scontent-lga3-1.xx&oh=36dceddb1a343fa228841d4884c61c57&oe=5ED0D541'
    },
    {
        // -- 2
        username: 'jfagan',
        password: '4321',
        avatar_url: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/60391959_10156690818223778_5271941737294594048_n.jpg?_nc_cat=111&_nc_ohc=guFvllUwMjkAX-marSc&_nc_ht=scontent-lga3-1.xx&oh=51917601967c9e8872a8663239061130&oe=5EBC14FB'
    },
    {
        // -- 3
        username: 'prncessbri94',
        password: '1123',
        avatar_url: 'https://pbs.twimg.com/profile_images/1210460636305657856/kMcYsdea_400x400.jpg'
    },
    {
        // -- 4
        username: 'djfbrawler',
        password: '1223',
        avatar_url: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/14590309_493087897549150_743346015237574308_n.jpg?_nc_cat=104&_nc_ohc=30zGnsTBb6gAX9r7hmY&_nc_ht=scontent-lga3-1.xx&oh=ec34e58107da562e9c4b5044c5ab7cc1&oe=5EC931E4'
    }
];

const comments = [
    {
        comment_body: 'The season finale was insane',
        user_id: '1',
        show_id: '7'
    },
    {
        comment_body: 'I am so glad i got put onto this show',
        user_id: '2',
        show_id: '7'
    },
    {
        comment_body: 'Goku Ultra instinct is so freaking dope',
        user_id: '2',
        show_id: '3'
    },
    {
        comment_body: 'I really cannot believe Zoey is like this lmaoo',
        user_id: '3',
        show_id: '8'
    },
    {
        comment_body: 'I wish this series had less filler smh',
        user_id: '4',
        show_id: '4'
    },
    {
        comment_body: 'That scene with the flame breathing technique was sick',
        user_id: '4',
        show_id: '7'
    }
];

const watchlist = [
    {
        show_id: '7',
        user_id: '1'
    },
    {
        show_id: '2',
        user_id: '1'
    },
    {
        show_id: '3',
        user_id: '1'
    },
    {
        show_id: '8',
        user_id: '1'
    },
    {
        show_id: '4',
        user_id: '1'
    },
    {
        show_id: '7',
        user_id: '2'
    },
    {
        show_id: '3',
        user_id: '2'
    },
    {
        show_id: '4',
        user_id: '2'
    },
    {
        show_id: '8',
        user_id: '3'
    },
    {
        show_id: '6',
        user_id: '3'
    },
    {
        show_id: '7',
        user_id: '4'
    },
    {
        show_id: '1',
        user_id: '4'
    },
    {
        show_id: '4',
        user_id: '4'
    }
];

const signUpUser = async (users) => {
    for (let i = 0; i < users.length; i++) {
        try {
            await axios.post('http://localhost:3100/auth/signup', users[i])
        } catch (err) {
            console.log(err)
        }
    }
    
}

const makeComments = async (comments) => {
    for (let i = 0; i < comments.length; i++) {
        try {
            await axios.post(`http://localhost:3100/comments/new/${comments[i].user_id}/${comments[i].show_id}`, { comment_body: comments[i].comment_body })
        } catch (err) {
            console.log(err)
        }
    }
}

const loadUserWatchlist = async (watchlist) => {
    for (let i = 0; i < watchlist.length; i++) {
        try {
            await axios.post(`http://localhost:3100/shows/watchlist/${watchlist[i].show_id}/${watchlist[i].user_id}`)
        } catch (err) {
            console.log(err)
        }
    }
}

const seedDatabase = async (users, comments, watchlist) => {
    await signUpUser(users);
    
    await loadUserWatchlist(watchlist);

    await makeComments(comments);
}

seedDatabase(users, comments, watchlist)