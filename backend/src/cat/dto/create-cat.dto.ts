import { CreateMouseDto } from "src/mouse/dto/create-mouse.dto";

export class CreateCatDto {
    name: string;
    image: string;
    description: string;
    mice?: Omit<CreateMouseDto, 'catId'>[]
}