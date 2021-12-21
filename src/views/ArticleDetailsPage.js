import routes from '../routes';
import './ArticleDetailsPage.scss';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function ArticleDetailsPage({ location, history }) {
  const handleGoBack = () => {
    history.push(location.state.from || routes.home);
  };
  return (
    <>
      <div className="detaile_page">
        <img className="detaile_page--img" src={location.state.img} alt="" />
        <div className="detaile_page--info">
          <h2 className="detaile_page--title">{location.state.title}</h2>
          <p className="detaile_page--content">
            {location.state.content} Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aliquam, quidem iusto id qui quisquam quod labore ea, officia maxime architecto
            explicabo nisi ratione soluta omnis veniam excepturi placeat commodi quas eius? Neque
            reiciendis provident mollitia, deserunt blanditiis recusandae qui veniam optio nihil
            aperiam voluptatem assumenda id nulla natus! Ut recusandae laborum eveniet ea magnam
            velit, asperiores corporis distinctio cum facere architecto omnis excepturi soluta alias
            repellat molestiae culpa, sint fugiat labore rem itaque quidem, possimus modi.
            Architecto eum ratione asperiores iste nulla beatae repudiandae voluptatem illum
            laborum. Distinctio, tempora? Repellat et vel modi maiores repellendus possimus
            voluptatum autem, temporibus velit assumenda cumque soluta ratione labore veniam, ad
            omnis doloremque eveniet quo incidunt provident alias mollitia. Consectetur vero nobis
            molestias exercitationem amet natus dolore nesciunt ut. Ut tempore obcaecati dolorum
            doloribus corrupti non est dicta veritatis perspiciatis explicabo repellat at cum eos,
            animi qui itaque alias aperiam quia nobis, consequatur, magni nisi sapiente veniam
            laboriosam? Ea in fuga, inventore impedit quibusdam reprehenderit. Aspernatur suscipit
            culpa est. Nemo voluptas soluta tenetur ab esse illum quod, perspiciatis culpa eligendi,
            deleniti ex ullam. Impedit eum cupiditate id similique repellat sint omnis laudantium
            facere vero animi inventore, ex dolores aut itaque aspernatur blanditiis deserunt error.
            Cumque, sequi magnam, ducimus recusandae, iure fugiat consequuntur voluptatum quod natus
            praesentium porro. Consequuntur recusandae, tempore accusantium ab voluptatem, sint non
            suscipit exercitationem eveniet possimus accusamus! Unde quis optio modi vero nihil
            vitae, hic blanditiis alias repudiandae quisquam ut id sunt amet vel nesciunt accusamus
            aliquam ullam architecto mollitia corporis tempora placeat. Aspernatur sit ad voluptas
            labore quidem omnis aliquid numquam obcaecati architecto, voluptatum aperiam eos dicta
            praesentium inventore ipsum impedit rem sunt, necessitatibus odio in corrupti repellat
            reprehenderit ab magnam? Cum labore quasi perspiciatis explicabo dolorem quidem
            inventore perferendis, nostrum maxime, dolores autem quisquam? Architecto quos cum quam
            libero quaerat ab, labore, ut illum facilis totam cumque est at autem veritatis animi
            dolor consequuntur iusto quod exercitationem, nostrum quisquam laboriosam amet. Ratione
            quo animi quaerat maxime, nisi error laboriosam ex repellat sunt culpa? Dolor culpa
            veritatis unde maxime praesentium vero error molestias voluptas neque. Quo dignissimos
            omnis illum quod reiciendis, cupiditate facere saepe quam. Itaque quis reiciendis natus
            cum dolore aliquam explicabo repellat sint deleniti sed rerum, veniam tempora odio
            commodi. Sint atque itaque totam quo qui alias natus explicabo, fuga dolorem nulla.
            Commodi, illo necessitatibus, qui dolor deleniti blanditiis quae sunt quidem ab minus
            vel, officia est velit. Totam dolore, ducimus eos nostrum eius necessitatibus nobis hic
            debitis omnis! Alias assumenda expedita deleniti ex consectetur inventore quasi sequi,
            maiores ab sint? Quae tenetur suscipit repudiandae voluptates quam voluptate esse
            cupiditate illo nulla. Nihil repellendus vero tempore voluptatum quod id ipsum ex
            officiis aspernatur labore ducimus totam tempora, molestias ratione quis minus, sunt
            quasi! Rem cum eligendi rerum quis. Voluptates magni recusandae omnis temporibus ut
            soluta incidunt molestiae praesentium quod maxime voluptatibus eligendi distinctio harum
            pariatur ducimus quos sequi excepturi a dolore, perferendis nam reiciendis repudiandae
            suscipit! Assumenda minus dolore ipsum consequatur praesentium amet accusamus doloremque
            corrupti magni ad!
          </p>

          <Button
            onClick={handleGoBack}
            sx={{
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              color: '#363636',
              fontSize: '16px',
              textTransform: 'none',
              top: '60px',
              marginLeft: '60px',
            }}
            size="small"
          >
            <Icon
              sx={{
                pl: 0.5,
                position: 'relative',
                top: '-5px',
              }}
            >
              <ArrowBackIcon />
            </Icon>
            Back to homepage
          </Button>
        </div>
      </div>
    </>
  );
}
