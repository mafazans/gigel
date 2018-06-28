import mongoose from 'mongoose';
import multer from 'multer';
import jimp from 'jimp';
import uuid from 'uuid';

const User = mongoose.model('User');

const multerOptions = {
	storage: multer.memoryStorage(),
	fileFilter(req, file, next){
		// console.log(file)
		const isPhoto = file.mimetype.startsWith('image/');
		if(isPhoto){
			next(null, true);
		}else {
			next({ message: 'That filetype is not allowed!' }, false);
		}
	}
};

exports.upload = multer(multerOptions).single('photo');

exports.resize = async(req, res, next) => {
	// console.log(req)
	if(!req.file){
		next();
		return;
	}
	const extension = req.file.mimetype.split('/')[1];
	req.body.photo = `${uuid.v4()}.${extension}`;
	const photo = await jimp.read(req.file.buffer);
	await photo.resize(800, jimp.AUTO);
	await photo.write(`./public/uploads/${req.body.photo}`);
	next();
}

exports.updateProfile = async (req, res) => {
	const user = await User.findOneAndUpdate(
		{_id: req.userData.id },
		{$set:
			{
				name : req.body.name,
				about : req.body.about,
				phone : req.body.phone,
				address: req.body.address,
				photo: req.body.photo,
				updated: Date.now()
			}
		},
		{
			new: true,
			runValidators: true
		}
	).exec();
	res.json({ status: true, message: 'Profile Updated' })
}