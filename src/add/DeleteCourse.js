import React, {useState} from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'


export default function DeleteCourse(props) {
  const [open, setOpen] = useState(false)
  
  
  const clickButton = () => {
    setOpen(true)
  }
  const deleteCourse = () => {
    
        setOpen(false)
        props.onRemove(props.course)
     
  }
  const handleRequestClose = () => {
    setOpen(false)
  }
    return (<span>
      <IconButton aria-label="Delete" onClick={clickButton} color="secondary">
        <DeleteIcon/>
      </IconButton>

      <Dialog open={open} onClose={handleRequestClose}>
        <DialogTitle>{"Delete "+props.course.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Confirm to delete your course {props.course.name}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRequestClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteCourse} color="secondary" autoFocus="autoFocus">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </span>)
}
DeleteCourse.propTypes = {
  course: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
}