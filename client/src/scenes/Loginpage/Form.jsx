import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";

const registerSchema = yup.object().shape({
  firstName:yup.string().required("required"),
  lastName:yup.string().required("required"),
  email:yup.string().email("invalid email").required("required"),
  Department:yup.string().required("required"),
  password:yup.string().required("required"),
  
})
