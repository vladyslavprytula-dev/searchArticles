import moment from 'moment';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Highlighter from 'react-highlight-words';
import Icon from '@mui/material/Icon';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Article({ date, img, title, description, filterWords }) {
  const postDate = moment(date).format('MMM Do YY');
  return (
    <Card
      sx={{
        width: 400,
        height: 560,
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
        borderRadius: '5px',
        border: '1px solid #EAEAEA',
      }}
    >
      <CardMedia component="img" alt="" height="217" image={img} sx={{ mb: 1 }} />
      <CardContent sx={{ paddingLeft: '25px' }}>
        <Typography
          sx={{
            mb: 1.5,
            opacity: 0.6,
            fontFamily: 'Montserrat',
          }}
        >
          <Icon
            sx={{
              pr: 0.5,
              position: 'relative',
              top: '5px',
            }}
            aria-label="CalendarTodayOutlined"
          >
            <CalendarTodayOutlinedIcon />
          </Icon>
          {postDate}
        </Typography>
        <Typography
          sx={{
            mb: 2.5,
            fontFamily: 'Montserrat',
          }}
          variant="h5"
          component="div"
        >
          <Highlighter
            searchWords={filterWords.split(' ')}
            autoEscape={true}
            textToHighlight={title}
          />
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '16px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
          variant="body1"
        >
          <Highlighter
            searchWords={filterWords.split(' ')}
            autoEscape={true}
            textToHighlight={description.substr(0, 100)}
          />
          ...
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 0, paddingLeft: '25px', marginTop: '20px' }}>
        <Button
          sx={{
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            color: '#363636',
            fontSize: '16px',
            textTransform: 'none',
            padding: 0,
          }}
          color="primary"
          size="small"
        >
          Read more
          <Icon
            sx={{
              pl: 0.5,
              position: 'relative',
              top: '-5px',
            }}
          >
            <ArrowForwardIcon />
          </Icon>
        </Button>
      </CardActions>
    </Card>
  );
}
