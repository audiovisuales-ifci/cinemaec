import styles from '../Rea.module.css'
import Section from '../../../components/Section'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { benefitsText } from '../../../data/benefitsTexts'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Button from '../../../components/Button/Button'

const Benefits = () => {
  return (
    <div className={styles.Benefits}>
      <Section id="benefits">
        <h2>Beneficios</h2>
        {benefitsText.map((benefit, i) => (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls={`panel-${i}`}
              id={`panel_id-${i}`}
            >
              <h4>{benefit.title}</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {benefit.subtitle} <br />
                {benefit.text}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Link to="/rea/register" className="button-primary">
          <Button label="Regístrate" />
        </Link>
      </Section>
    </div>
  )
}

export default Benefits
