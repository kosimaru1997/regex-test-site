import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  styled,
  Typography,
} from '@mui/material';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import useProblemList from '../molecules/useProblemList';

const CardListStyle = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'space-around',
  justifyContent: 'center',
}));

const SearchResult = styled('h3')(() => ({
  textAlign: 'right',
  marginRight: '8%',
  fontFamily: 'sans-serif',
}));

export const ProblemList = (): ReactElement => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const problems = useProblemList();

  return (
    <>
      <SearchResult>件</SearchResult>
      {problems ? (
        <CardListStyle>
          {problems.map((problem) => (
            <Card sx={{ width: 350, margin: 3 }} key={problem.id}>
              <CardActionArea>
                <Link to={`/problems/${problem.id}`}>
                  <CardContent
                    sx={{ height: 'auto' }}
                    style={{ paddingBottom: 0 }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                      className="black"
                    >
                      ID: {problem.id}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                      className="black"
                    >
                      タイトル: {problem.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                      className="black"
                    >
                      内容: {problem.content}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
              <CardActions sx={{ alignItems: 'flex-end' }}>
                <Link
                  to={`/problems/${problem.id}`}
                  style={{ marginRight: '5px' }}
                >
                  <Button size="small" variant="outlined">
                    <span style={{ fontSize: '16px' }}>詳細</span>
                  </Button>
                </Link>
                <Link
                  to={`/problems/${problem.id}/edit`}
                  style={{ marginRight: '10px' }}
                >
                  <Button size="small" variant="outlined" color="success">
                    <span style={{ fontSize: '16px' }}>編集</span>
                  </Button>
                </Link>
                <Link to={`/problems/${problem.id}/images`}>
                  <CameraAltIcon color="primary" />
                </Link>

                <IconButton aria-label="delete" sx={{ ml: 'auto' }}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </CardListStyle>
      ) : null}
    </>
  );
};
