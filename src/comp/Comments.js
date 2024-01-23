import React, { Component } from 'react';

import PropTypes from 'prop-types';

import style from '../css/styles.module.css';

export class Comments extends Component {
    state = { 
        filterId: '',
        arrComments: [    
            {postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium'},
            {postId: 1, id: 2, name: 'quo vero reiciendis velit similique earum', email: 'Jayne_Kuhic@sydney.com', body: 'est natus enim nihil est dolore omnis voluptatem n…iatur\nnihil sint nostrum voluptatem reiciendis et'},
            {postId: 1, id: 3, name: 'odio adipisci rerum aut animi', email: 'Nikita@garfield.biz', body: 'quia molestiae reprehenderit quasi aspernatur\naut …mus et vero voluptates excepturi deleniti ratione'},
            {postId: 1, id: 4, name: 'alias odio sit', email: 'Lew@alysha.tv', body: 'non et atque\noccaecati deserunt quas accusantium u…r itaque dolor\net qui rerum deleniti ut occaecati'},
            {postId: 1, id: 5, name: 'vero eaque aliquid doloribus et culpa', email: 'Hayden@althea.biz', body: 'harum non quasi et ratione\ntempore iure ex volupta…ugit inventore cupiditate\nvoluptates magni quo et'},
            {postId: 2, id: 6, name: 'et fugit eligendi deleniti quidem qui sint nihil autem', email: 'Presley.Mueller@myrl.com', body: 'doloribus at sed quis culpa deserunt consectetur q…utem\nvoluptatem repellendus aspernatur dolorem in'},
            {postId: 2, id: 7, name: 'repellat consequatur praesentium vel minus molestias voluptatum', email: 'Dallas@ole.me', body: 'maiores sed dolores similique labore et inventore … corporis molestiae mollitia quia et magnam dolor'},
            {postId: 2, id: 8, name: 'et omnis dolorem', email: 'Mallory_Kunze@marie.org', body: 'ut voluptatem corrupti velit\nad voluptatem maiores…samus maiores\nvoluptates quia aliquid ullam eaque'},
            {postId: 2, id: 9, name: 'provident id voluptas', email: 'Meghan_Littel@rene.us', body: 'sapiente assumenda molestiae atque\nadipisci laboru…natur odit sit rem expedita\nquas enim ipsam minus'},
            {postId: 2, id: 10, name: 'eaque et deleniti atque tenetur ut quo ut', email: 'Carmen_Keeling@caroline.name', body: 'voluptate iusto quis nobis reprehenderit ipsum ame…s\nnostrum quaerat nulla et accusamus nisi facilis'},
            {postId: 3, id: 11, name: 'fugit labore quia mollitia quas deserunt nostrum sunt', email: 'Veronica_Goodwin@timmothy.net', body: 'ut dolorum nostrum id quia aut est\nfuga est invent…s quo est\nut blanditiis quia ut vel ut maiores ea'},
            {postId: 3, id: 12, name: 'modi ut eos dolores illum nam dolor', email: 'Oswald.Vandervort@leanne.org', body: 'expedita maiores dignissimos facilis\nipsum est rem…ores dolor totam\noccaecati ratione eius rem velit'},
            {postId: 3, id: 13, name: 'aut inventore non pariatur sit vitae voluptatem sapiente', email: 'Kariane@jadyn.tv', body: 'fuga eos qui dolor rerum\ninventore corporis exerci…sandae est sed quis culpa\neum maiores corporis et'},
            {postId: 3, id: 14, name: 'et officiis id praesentium hic aut ipsa dolorem repudiandae', email: 'Nathan@solon.io', body: 'vel quae voluptas qui exercitationem\nvoluptatibus …ta magnam laudantium et et quaerat ut qui dolorum'},
            {postId: 3, id: 15, name: 'debitis magnam hic odit aut ullam nostrum tenetur', email: 'Maynard.Hodkiewicz@roberta.com', body: 'nihil ut voluptates blanditiis autem odio dicta re…mo laudantium deserunt\nmolestias tempora quo quia'},
            {postId: 4, id: 16, name: 'perferendis temporibus delectus optio ea eum ratione dolorum', email: 'Christine@ayana.info', body: 'iste ut laborum aliquid velit facere itaque\nquo ut…s expedita consequuntur libero sed fugiat facilis'},
            {postId: 4, id: 17, name: 'eos est animi quis', email: 'Preston_Hudson@blaise.tv', body: 'consequatur necessitatibus totam sed sit dolorum\nr…ad eveniet delectus\ndoloribus odio qui non labore'},
            {postId: 4, id: 18, name: 'aut et tenetur ducimus illum aut nulla ab', email: 'Vincenza_Klocko@albertha.name', body: 'veritatis voluptates necessitatibus maiores corrup…ullam velit sit magnam laborum\nmagni ut molestias'},
            {postId: 4, id: 19, name: 'sed impedit rerum quia et et inventore unde officiis', email: 'Madelynn.Gorczany@darion.biz', body: 'doloribus est illo sed minima aperiam\nut dignissim…os ut voluptates\nquisquam porro sed architecto ut'},
            {postId: 4, id: 20, name: 'molestias expedita iste aliquid voluptates', email: 'Mariana_Orn@preston.org', body: 'qui harum consequatur fugiat\net eligendi perferend…quam qui\nut sit dignissimos reprehenderit tempore'},
            {postId: 5, id: 21, name: 'aliquid rerum mollitia qui a consectetur eum sed', email: 'Noemie@marques.me', body: 'deleniti aut sed molestias explicabo\ncommodi odio …voluptate doloremque est\nnam autem error delectus'},
            {postId: 5, id: 22, name: 'porro repellendus aut tempore quis hic', email: 'Khalil@emile.co.uk', body: 'qui ipsa animi nostrum praesentium voluptatibus od…rit quidem ut incidunt nihil necessitatibus rerum'},
            {postId: 5, id: 23, name: 'quis tempora quidem nihil iste', email: 'Sophia@arianna.co.uk', body: 'voluptates provident repellendus iusto perspiciati…o rerum in quos\nvel eligendi enim quae fugiat est'},
            {postId: 5, id: 24, name: 'in tempore eos beatae est', email: 'Jeffery@juwan.us', body: 'repudiandae repellat quia\nsequi est dolore explica…t et\net praesentium iste atque asperiores tenetur'},
            {postId: 5, id: 25, name: 'autem ab ea sit alias hic provident sit', email: 'Isaias_Kuhic@jarrett.net', body: 'sunt aut quae laboriosam sit ut impedit\nadipisci h…\nnon iure distinctio ut velit doloribus\net non ex'},
            {postId: 6, id: 26, name: 'in deleniti sunt provident soluta ratione veniam quam praesentium', email: 'Russel.Parker@kameron.io', body: 'incidunt sapiente eaque dolor eos\nad est molestias…il exercitationem at cumque ullam\nnihil magnam et'},
            {postId: 6, id: 27, name: 'doloribus quibusdam molestiae amet illum', email: 'Francesco.Gleason@nella.us', body: 'nisi vel quas ut laborum ratione\nrerum magni eum\nu…voluptas corporis modi amet ipsam eos saepe porro'},
            {postId: 6, id: 28, name: 'quo voluptates voluptas nisi veritatis dignissimos dolores ut officiis', email: 'Ronny@rosina.org', body: 'voluptatem repellendus quo alias at laudantium\nmol…consequuntur vitae rerum illum\nid corporis sit id'},
            {postId: 6, id: 29, name: 'eum distinctio amet dolor', email: 'Jennings_Pouros@erica.biz', body: 'tempora voluptatem est\nmagnam distinctio autem est…rerum itaque corporis nihil nam\neaque rerum error'},
            {postId: 6, id: 30, name: 'quasi nulla ducimus facilis non voluptas aut', email: 'Lurline@marvin.biz', body: 'consequuntur quia voluptate assumenda et\nautem vol…accusantium aperiam eius qui dolore voluptatem et'},
            {postId: 7, id: 31, name: 'ex velit ut cum eius odio ad placeat', email: 'Buford@shaylee.biz', body: 'quia incidunt ut\naliquid est ut rerum deleniti iur…\nvoluptatem quaerat eaque repudiandae eveniet aut'},
            {postId: 7, id: 32, name: 'dolorem architecto ut pariatur quae qui suscipit', email: 'Maria@laurel.name', body: 'nihil ea itaque libero illo\nofficiis quo quo dicta…sitatibus velit tempore\nrerum velit et temporibus'},
            {postId: 7, id: 33, name: 'voluptatum totam vel voluptate omnis', email: 'Jaeden.Towne@arlene.tv', body: 'fugit harum quae vero\nlibero unde tempore\nsoluta e…lpa sequi quibusdam nulla id\net et necessitatibus'},
            {postId: 7, id: 34, name: 'omnis nemo sunt ab autem', email: 'Ethelyn.Schneider@emelia.co.uk', body: 'omnis temporibus quasi ab omnis\nfacilis et omnis i…t\nminus iure ex rem ut reprehenderit\nin non fugit'},
            {postId: 7, id: 35, name: 'repellendus sapiente omnis praesentium aliquam ipsum id molestiae omnis', email: 'Georgianna@florence.io', body: 'dolor mollitia quidem facere et\nvel est ut\nut repu…idem dolorem sed atque\nrem quia aut adipisci sunt'},
            {postId: 8, id: 36, name: 'sit et quis', email: 'Raheem_Heaney@gretchen.biz', body: 'aut vero est\ndolor non aut excepturi dignissimos i…t magnam quas modi maxime\nvoluptatem et molestiae'},
            {postId: 8, id: 37, name: 'beatae veniam nemo rerum voluptate quam aspernatur', email: 'Jacky@victoria.net', body: 'qui rem amet aut\ncumque maiores earum ut quia sit …uis voluptas\ndolorem distinctio ex temporibus rem'},
            {postId: 8, id: 38, name: 'maiores dolores expedita', email: 'Piper@linwood.us', body: 'unde voluptatem qui dicta\nvel ad aut eos error con…sit aut\nvelit aut et ea ratione eveniet iure fuga'},
            {postId: 8, id: 39, name: 'necessitatibus ratione aut ut delectus quae ut', email: 'Gaylord@russell.net', body: 'atque consequatur dolorem sunt\nadipisci autem et\nv… nostrum nemo\neligendi sed et beatae et inventore'},
            {postId: 8, id: 40, name: 'non minima omnis deleniti pariatur facere quibusdam at', email: 'Clare.Aufderhar@nicole.ca', body: 'quod minus alias quos\nperferendis labore molestias…ut et ullam unde asperiores\ncum voluptatem cumque'},
            {postId: 9, id: 41, name: 'voluptas deleniti ut', email: 'Lucio@gladys.tv', body: 'facere repudiandae vitae ea aut sed quo ut et\nface…numquam dolores\ninventore sint mollitia provident'},
            {postId: 9, id: 42, name: 'nam qui et', email: 'Shemar@ewell.name', body: 'aut culpa quaerat veritatis eos debitis\naut repell…t iure\nincidunt quo sequi quia dolorum beatae qui'},
            {postId: 9, id: 43, name: 'molestias sint est voluptatem modi', email: 'Jackeline@eva.tv', body: 'voluptatem ut possimus laborum quae ut commodi del…\nest rerum laborum et et velit sint ipsum dolorem'},
            {postId: 9, id: 44, name: 'hic molestiae et fuga ea maxime quod', email: 'Marianna_Wilkinson@rupert.io', body: 'qui sunt commodi\nsint vel optio vitae quis qui non…icta\neos nihil sit inventore est numquam officiis'},
            {postId: 9, id: 45, name: 'autem illo facilis', email: 'Marcia@name.biz', body: 'ipsum odio harum voluptatem sunt cumque et dolores…um\ncorporis quo in vitae similique cumque tempore'},
            {postId: 10, id: 46, name: 'dignissimos et deleniti voluptate et quod', email: 'Jeremy.Harann@waino.me', body: 'exercitationem et id quae cum omnis\nvoluptatibus a… sint\ndoloremque illo ex atque necessitatibus sed'},
            {postId: 10, id: 47, name: 'rerum commodi est non dolor nesciunt ut', email: 'Pearlie.Kling@sandy.com', body: 'occaecati laudantium ratione non cumque\nearum quod…oluptatem rem eaque voluptatem aut ut\net sit quam'},
            {postId: 10, id: 48, name: 'consequatur animi dolorem saepe repellendus ut quo aut tenetur', email: 'Manuela_Stehr@chelsie.tv', body: 'illum et alias quidem magni voluptatum\nab soluta e…e\nest sint vel veritatis officia consequuntur cum'},
            {postId: 10, id: 49, name: 'rerum placeat quae minus iusto eligendi', email: 'Camryn.Weimann@doris.io', body: 'id est iure occaecati quam similique enim\nab repud…s optio maiores non doloremque aut iusto sapiente'},
            {postId: 10, id: 50, name: 'dolorum soluta quidem ex quae occaecati dicta aut doloribus', email: 'Kiana_Predovic@yasmin.io', body: 'eum accusamus aut delectus\narchitecto blanditiis q…r vel corrupti inventore\nanimi dicta vel corporis'}
        ]
    }
    deleteComment = (commentId) => {
        this.setState((prevState) => ({
            arrComments: prevState.arrComments.filter(comment => comment.id !== commentId)
        }));
    };

    handleFilterIdChange = (e) => {
        const filterId = e.target.value;
        this.setState({ filterId });
    }

    render() {
        const filteredComments = this.state.arrComments.filter(comment =>
            comment.postId.toString().includes(this.state.filterId)
        );

        return (
            <div className={style.users}>
                <h4>Comments</h4>
                <input 
                    type="text"
                    placeholder='Фільтр по ID'
                    value={this.state.filterId}
                    onChange={this.handleFilterIdChange}
                />

                {filteredComments.map(comment => (
                    <div key={comment.id}>
                        {comment.postId} - {comment.id} - {comment.name} - {comment.email} - {comment.body} 
                        <button onClick={() => this.deleteComment(comment.id)}>Del</button>
                    </div>
                ))}
            </div>
        );
    }
}

Comments.propTypes = {
    arrComments: PropTypes.arrayOf(
        PropTypes.shape({
            postId: PropTypes.number,
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
        })
    ),
};