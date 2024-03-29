/* eslint-disable react/prop-types */
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Paper } from '@mui/material';
import Chip from '@mui/material/Chip';

export default function CalibracaoCard({ instrumento, isDetail }) {
  const calibracoes = isDetail
    ? instrumento.calibracoes
    : [instrumento.calibracoes[0]];

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      id="calibracao"
    >
      {calibracoes.map((calibracao, index) => (
        <Paper key={index} elevation={ isDetail ? 4 : 0} sx={ isDetail ? {marginTop: 2, padding: 1, backgroundColor: '#d1c8c04c' }: {}}>
          <>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ my: 1 }}>
              <Typography variant="body2">Resultado:</Typography>
              <Chip label={calibracao?.status === 'A' ? 'Aprovado' : 'Reprovado'} variant="outlined" size="small" color={calibracao?.status === 'A' ? 'success' : 'primary'} />
            </Grid>
            <Divider />
          </>
          {calibracao?.maior_erro && (
            <>
              <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Maior erro:</Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                  {calibracao.maior_erro}
                </Typography>
              </Grid>
              <Divider />
            </>
          )}
          {calibracao?.incerteza && (
            <>
              <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Incerteza:</Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                  {calibracao.incerteza}
                </Typography>
              </Grid>
              <Divider />
            </>
          )}
          {calibracao?.criterio_de_aceitacao && (
            <>
              <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Critério de aceitação:</Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                  {calibracao.criterio_de_aceitacao}
                </Typography>
              </Grid>
              <Divider />
            </>
          )}
          {calibracao?.referencia_do_criterio && (
            <>
              <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Referência do critério:</Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                  {calibracao.referencia_do_criterio}
                </Typography>
              </Grid>
              <Divider />
            </>
          )}
          {calibracao?.local && (
            <>
              <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Local:</Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                  {calibracao.local}
                </Typography>
              </Grid>
              <Divider />
            </>
          )}
          {calibracao?.data && (
            <>
              <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Data:</Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                  {calibracao.data}
                </Typography>
              </Grid>
              <Divider />
            </>
          )}
          {calibracao?.certificado && (
            <>
              <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Certificado:</Typography>
                <Typography
                  component={Link}
                  href={calibracao.certificado}
                  target="_blank"
                  variant="button"
                >
                  {calibracao.numero_do_certificado || 'Visualizar'}
                </Typography>
              </Grid>
              <Divider />
            </>
          )}
          {calibracao?.ordem_de_servico && (
            <>
              <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">Ordem de serviço:</Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                  {calibracao.ordem_de_servico}
                </Typography>
              </Grid>
              <Divider />
            </>
          )}
          {calibracao?.data_proxima_calibracao && (
            <>
              <Grid container justifyContent="space-between" sx={{ my: 1 }}>
                <Typography variant="body2">
                  Data da próxima calibração:{' '}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                  {calibracao.data_proxima_calibracao}
                </Typography>
              </Grid>
            </>
          )}
        </ Paper>
      ))}

      {!isDetail && instrumento.calibracoes.length > 1  && (
          <Link
            sx={{alignSelf: 'center', mt:1.5, fontSize: 13}}
            variant='button'
            component={RouterLink}
            to={`/instrumento/${instrumento.id}#calibracao`}
          >
            Ver mais calibrações
          </Link>
      )}
    </Grid>
  );
}
